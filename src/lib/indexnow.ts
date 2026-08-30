export interface IndexNowPayload {
  host: string;
  key: string;
  keyLocation?: string;
  urlList: string[];
}

export interface IndexNowResult {
  success: boolean;
  status: number;
  message: string;
  submittedCount: number;
  submittedUrls: string[];
}

const DEFAULT_BASE_URL = "https://www.fakereviewgenerator.com";

/**
 * Normalizes a URL or path to a full canonical URL matching the configured site domain.
 */
export function normalizeUrl(urlOrPath: string, baseUrl: string = DEFAULT_BASE_URL): string | null {
  try {
    const trimmed = urlOrPath.trim();
    if (!trimmed) return null;

    let parsed: URL;
    if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
      parsed = new URL(trimmed);
    } else {
      parsed = new URL(trimmed.startsWith("/") ? trimmed : `/${trimmed}`, baseUrl);
    }

    const baseParsed = new URL(baseUrl);
    // Align host (handling www vs non-www if matching primary domain)
    if (parsed.hostname.replace(/^www\./, "") === baseParsed.hostname.replace(/^www\./, "")) {
      parsed.protocol = baseParsed.protocol;
      parsed.hostname = baseParsed.hostname;
      parsed.port = baseParsed.port;
    }

    return parsed.toString();
  } catch {
    return null;
  }
}

/**
 * Submits a list of URLs to the IndexNow API for instant search engine discovery (Bing, Yandex, etc.).
 *
 * @param urls Array of absolute URLs or relative paths to submit.
 * @returns IndexNowResult detailing status and count of submitted URLs.
 */
export async function submitToIndexNow(urls: string[]): Promise<IndexNowResult> {
  const apiKey = process.env.INDEXNOW_KEY || "38aa8c7cc8ef47458e867463400dcc6e";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_BASE_URL;

  if (!apiKey) {
    throw new Error("INDEXNOW_KEY environment variable is not defined.");
  }

  const hostUrl = new URL(siteUrl);
  const host = hostUrl.hostname;
  const keyLocation = `${siteUrl.replace(/\/+$/, "")}/${apiKey}.txt`;

  // Normalize and deduplicate URLs
  const cleanedUrls = Array.from(
    new Set(
      urls
        .map((u) => normalizeUrl(u, siteUrl))
        .filter((u): u is string => Boolean(u) && new URL(u!).hostname === host)
    )
  );

  if (cleanedUrls.length === 0) {
    return {
      success: true,
      status: 200,
      message: "No valid URLs matching the host domain to submit.",
      submittedCount: 0,
      submittedUrls: [],
    };
  }

  // IndexNow API accepts up to 10,000 URLs per batch
  const BATCH_SIZE = 10000;
  const batches = [];
  for (let i = 0; i < cleanedUrls.length; i += BATCH_SIZE) {
    batches.push(cleanedUrls.slice(i, i + BATCH_SIZE));
  }

  let totalSubmitted = 0;
  let lastStatus = 200;

  for (const batch of batches) {
    const payload: IndexNowPayload = {
      host,
      key: apiKey,
      keyLocation,
      urlList: batch,
    };

    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    lastStatus = response.status;

    // IndexNow responds with 200 (OK) or 202 (Accepted) on success
    if (response.status !== 200 && response.status !== 202) {
      const errorText = await response.text().catch(() => "Unknown error");
      throw new Error(
        `IndexNow API error (HTTP ${response.status}): ${errorText || response.statusText}`
      );
    }

    totalSubmitted += batch.length;
  }

  return {
    success: true,
    status: lastStatus,
    message:
      lastStatus === 200
        ? "URLs submitted and processed successfully."
        : "URLs submitted and accepted for processing.",
    submittedCount: totalSubmitted,
    submittedUrls: cleanedUrls,
  };
}
