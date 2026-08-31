import crypto from "crypto";

export const SESSION_COOKIE_NAME = "rc_session";
export const AD_FREE_COOKIE_NAME = "rc_ad_free";
export const SESSION_DURATION_DAYS = 30;
export const SESSION_DURATION_MS = SESSION_DURATION_DAYS * 24 * 60 * 60 * 1000;

interface SessionPayload {
  u: string; // username
  exp: number; // expiration timestamp
  iat: number; // issued at timestamp
}

/**
 * Returns the secret key used to sign and verify personal session tokens.
 */
function getSecretKey(): string {
  return (
    process.env.ADMIN_SESSION_SECRET ||
    "rc_default_secret_persona_session_key_2026"
  );
}

/**
 * Validates admin username and password against environment variables.
 * Uses timing-safe string comparison to prevent timing attacks.
 */
export function verifyAdminCredentials(
  user: string,
  pass: string
): { success: boolean; error?: string } {
  const envUser = process.env.ADMIN_USERNAME || "admin";
  const envPass = process.env.ADMIN_PASSWORD || "admin12345";

  if (!user || !pass) {
    return { success: false, error: "Username and password are required" };
  }

  // Safe buffer comparison
  const userBuffer = Buffer.from(user);
  const envUserBuffer = Buffer.from(envUser);
  const passBuffer = Buffer.from(pass);
  const envPassBuffer = Buffer.from(envPass);

  const isUserMatch =
    userBuffer.length === envUserBuffer.length &&
    crypto.timingSafeEqual(userBuffer, envUserBuffer);

  const isPassMatch =
    passBuffer.length === envPassBuffer.length &&
    crypto.timingSafeEqual(passBuffer, envPassBuffer);

  if (isUserMatch && isPassMatch) {
    return { success: true };
  }

  return { success: false, error: "Invalid username or password" };
}

/**
 * Generates an HMAC-SHA256 signed session token.
 */
export function createSessionToken(username: string): string {
  const now = Date.now();
  const payload: SessionPayload = {
    u: username,
    iat: now,
    exp: now + SESSION_DURATION_MS,
  };

  const payloadStr = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = crypto
    .createHmac("sha256", getSecretKey())
    .update(payloadStr)
    .digest("base64url");

  return `${payloadStr}.${signature}`;
}

/**
 * Verifies and parses a signed session token.
 */
export function verifySessionToken(
  token: string | undefined | null
): { valid: boolean; username?: string } {
  if (!token || typeof token !== "string") {
    return { valid: false };
  }

  const parts = token.split(".");
  if (parts.length !== 2) {
    return { valid: false };
  }

  const [payloadStr, signature] = parts;
  const expectedSignature = crypto
    .createHmac("sha256", getSecretKey())
    .update(payloadStr)
    .digest("base64url");

  const sigBuffer = Buffer.from(signature);
  const expectedSigBuffer = Buffer.from(expectedSignature);

  if (
    sigBuffer.length !== expectedSigBuffer.length ||
    !crypto.timingSafeEqual(sigBuffer, expectedSigBuffer)
  ) {
    return { valid: false };
  }

  try {
    const payload: SessionPayload = JSON.parse(
      Buffer.from(payloadStr, "base64url").toString("utf-8")
    );

    if (Date.now() > payload.exp) {
      return { valid: false };
    }

    return { valid: true, username: payload.u };
  } catch {
    return { valid: false };
  }
}
