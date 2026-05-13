import { createWriteStream, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE_URL = 'https://www.generalintelligencecompany.com';
const PUBLIC_DIR = join(__dirname, '..', 'public');

const assets = [
  // Hero images
  { url: '/images/spring-hero-2.avif', dest: 'images/spring-hero-2.avif' },
  // Cofounder section background
  { url: '/images/cofounder-bg.avif', dest: 'images/cofounder-bg.avif' },
  // Footer bottom image
  { url: '/images/footer-2.png', dest: 'images/footer-2.png' },
  // Icons
  { url: '/images/icons/slack.png', dest: 'images/icons/slack.png' },
  { url: '/images/icons/mail.png', dest: 'images/icons/mail.png' },
  // Article thumbnails
  { url: '/images/posts/cofounder-1-sunset-blue.png', dest: 'images/posts/cofounder-1-sunset-blue.png' },
  { url: '/images/posts/agent-native-engineering/agent-native-engineering.png', dest: 'images/posts/agent-native-engineering/agent-native-engineering.png' },
  { url: '/images/posts/cofounder-1.5-and-8.7-million-seed.png', dest: 'images/posts/cofounder-1.5-and-8.7-million-seed.png' },
  // Favicons / SEO
  { url: '/images/favicon32.png', dest: 'images/favicon32.png' },
  { url: '/images/favicon256.png', dest: 'images/favicon256.png' },
  { url: '/favicon.ico', dest: 'seo/favicon.ico' },
  { url: '/images/og-about.png', dest: 'images/og-about.png' },
  // Careers images
  { url: '/images/career.avif', dest: 'images/career.avif' },
  { url: '/images/office-1.png', dest: 'images/office-1.png' },
  { url: '/images/career-develop.png', dest: 'images/career-develop.png' },
  // 404 stamp
  { url: '/images/404stamp.png', dest: 'images/404stamp.png' },
  // Fonts
  { url: '/_next/static/media/be66fc6922929061-s.p.woff2', dest: 'fonts/af.woff2' },
  { url: '/_next/static/media/17330fd087386262-s.p.woff2', dest: 'fonts/ppmondwest.woff2' },
];

async function downloadFile(url, dest) {
  const fullDest = join(PUBLIC_DIR, dest);
  const dir = dirname(fullDest);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  if (existsSync(fullDest)) {
    console.log(`  SKIP (exists): ${dest}`);
    return;
  }
  try {
    const res = await fetch(BASE_URL + url);
    if (!res.ok) { console.error(`  FAIL ${res.status}: ${url}`); return; }
    const buf = await res.arrayBuffer();
    const { writeFile } = await import('fs/promises');
    await writeFile(fullDest, Buffer.from(buf));
    console.log(`  OK: ${dest} (${Math.round(buf.byteLength / 1024)}KB)`);
  } catch (e) {
    console.error(`  ERROR: ${url} — ${e.message}`);
  }
}

// Download in batches of 4
async function downloadBatch(items) {
  for (let i = 0; i < items.length; i += 4) {
    const batch = items.slice(i, i + 4);
    await Promise.all(batch.map(({ url, dest }) => downloadFile(url, dest)));
  }
}

console.log('Downloading assets from generalintelligencecompany.com...\n');
await downloadBatch(assets);
console.log('\nDone!');
