#!/usr/bin/env node

/**
 * Script to submit site URLs to IndexNow for search engines (Bing, Yandex, etc.)
 *
 * Usage:
 *   node scripts/submit-indexnow.mjs
 *   node scripts/submit-indexnow.mjs --all
 *   node scripts/submit-indexnow.mjs https://www.fakereviewgenerator.com/blog/new-post
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

// Simple .env parser
function loadEnv() {
  const envPath = path.join(projectRoot, ".env");
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, "utf-8");
    for (const line of content.split("\n")) {
      const match = line.match(/^\s*([\w_]+)\s*=\s*(.*)?\s*$/);
      if (match && !process.env[match[1]]) {
        let val = (match[2] || "").trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1);
        }
        process.env[match[1]] = val;
      }
    }
  }
}

loadEnv();

const DEFAULT_HOST = "www.fakereviewgenerator.com";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || `https://${DEFAULT_HOST}`;
const API_KEY = process.env.INDEXNOW_KEY || "38aa8c7cc8ef47458e867463400dcc6e";
const HOST = new URL(SITE_URL).hostname;

const coreUrls = [
  `${SITE_URL}/`,
  `${SITE_URL}/about`,
  `${SITE_URL}/guides`,
  `${SITE_URL}/blog`,
  `${SITE_URL}/ai-generator`,
  `${SITE_URL}/bill-generator`,
  `${SITE_URL}/chat`,
  `${SITE_URL}/payment`,
  `${SITE_URL}/terms`,
  `${SITE_URL}/privacy-policy`,
  `${SITE_URL}/disclaimer`,
  `${SITE_URL}/cookie-policy`,
  `${SITE_URL}/contact`,
  `${SITE_URL}/acceptable-use`,
];

async function submitToIndexNow(urls) {
  console.log(`\n📡 Submitting ${urls.length} URLs to IndexNow...`);
  console.log(`🌐 Host: ${HOST}`);
  console.log(`🔑 Key Location: ${SITE_URL}/${API_KEY}.txt\n`);

  const payload = {
    host: HOST,
    key: API_KEY,
    keyLocation: `${SITE_URL}/${API_KEY}.txt`,
    urlList: urls,
  };

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
  });

  if (res.status === 200 || res.status === 202) {
    console.log(`✅ Success (HTTP ${res.status}): IndexNow accepted the URL list!`);
    console.log(`Search engines (Bing, Yandex, Naver, Seznam) are now notified.\n`);
  } else {
    const text = await res.text().catch(() => "");
    console.error(`❌ IndexNow Error (${res.status}):`, text || res.statusText);
    process.exit(1);
  }
}

async function main() {
  const args = process.argv.slice(2);

  let urlsToSubmit = [];

  if (args.length === 0 || args.includes("--all")) {
    urlsToSubmit = coreUrls;
  } else {
    urlsToSubmit = args.filter((a) => a.startsWith("http"));
    if (urlsToSubmit.length === 0) {
      urlsToSubmit = coreUrls;
    }
  }

  await submitToIndexNow(urlsToSubmit);
}

main().catch((err) => {
  console.error("Failed to run IndexNow script:", err);
  process.exit(1);
});
