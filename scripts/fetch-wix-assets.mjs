// Downloads images, videos and documents from the old Wix site into the repo.
// (public/resume.pdf is not fetched: copy it from the DanielChahine004/Resume GitHub repo.)
// Runs automatically before `npm run build`; skips files that already exist.
// Once these are committed to the repo, this does nothing (and Wix can be deleted).
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const IMG_DIR = 'src/assets/wix';
const VIDEO_DIR = 'public/videos';
const FILES = 'https://3f841acd-a2a4-41b9-a40c-b993f1b49757.filesusr.com/ugd/';
// Documents linked from the site: local path → Wix file.
const DOCS = {
  'public/docs/fluid-sim.txt': FILES + '56298d_14fa964d33de411b9b700154ba721629.txt',
  'public/docs/biomedical-conduit-literature-review.pdf': FILES + '56298d_c2480dbe44d14665aeb91d144425be0a.pdf',
  'public/docs/prism-protect-safety-glasses.pdf': FILES + '56298d_8daceaa2f0fa4784a65b80e2762b4bec.pdf',
};

// Collect every image and video filename referenced in site data + project frontmatter.
const images = new Set();
const videos = new Set();
const scan = (file) => {
  const text = readFileSync(file, 'utf8');
  (text.match(/56298d_[0-9a-f]{32}(?:~mv2\.(?:png|jpe?g)|f00\d\.jpg)/g) || []).forEach((m) => images.add(m));
  (text.match(/56298d_[0-9a-f]{32}(?=\.mp4)/g) || []).forEach((m) => videos.add(m));
};
scan('src/data/site.ts');
for (const f of readdirSync('src/content/projects')) scan(join('src/content/projects', f));
// Every video needs a poster frame (Video.astro uses the highest-numbered one present).
for (const v of videos) if (![...images].some((i) => i.startsWith(v))) images.add(`${v}f000.jpg`);

for (const d of [IMG_DIR, VIDEO_DIR, 'public/docs']) mkdirSync(d, { recursive: true });
async function get(urls, dest) {
  if (existsSync(dest)) return 'skip';
  const errors = [];
  for (const url of [urls].flat()) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 1024) throw new Error('empty file'); // Wix answers missing video qualities with a stub
      writeFileSync(dest, buf);
      return 'ok';
    } catch (e) {
      errors.push(`${url}: ${e.message}`);
    }
  }
  errors.forEach((e) => console.warn(`  ! could not fetch ${e}`));
  return 'fail';
}

const results = await Promise.all([
  // Saved with '~' -> '-' (Vite won't serve '~' paths on Windows); Img.astro maps names the same way.
  ...[...images].map((f) => get(`https://static.wixstatic.com/media/${f}`, join(IMG_DIR, f.replaceAll('~', '-')))),
  // 720p keeps every file well under Cloudflare Pages' 25 MB limit; fall back if Wix lacks it.
  ...[...videos].map((v) => get(['720p', '480p', '360p'].map((q) => `https://video.wixstatic.com/video/${v}/${q}/mp4/file.mp4`), join(VIDEO_DIR, `${v}.mp4`))),
  ...Object.entries(DOCS).map(([dest, url]) => get(url, dest)),
]);
const n = (s) => results.filter((r) => r === s).length;
console.log(`assets: ${n('ok')} downloaded, ${n('skip')} already present, ${n('fail')} failed`);
