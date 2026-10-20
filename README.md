# Daniel Chahine — portfolio

Static site built with [Astro](https://astro.build). The only client-side JavaScript is a few lines that play videos on hover (`src/components/Video.astro`) and open project cards full screen (`src/components/ProjectCard.astro`).

## Where things live

| What | File |
|---|---|
| Name, bio, links, education, skills, publications | `src/data/site.ts` |
| Projects (one Markdown file each) | `src/content/projects/*.md` |
| Colours, fonts, spacing | `src/styles/global.css` |
| Page layouts | `src/pages/`, `src/layouts/Base.astro` |
| Images | `src/assets/` (referenced by filename) |
| Videos (`video:` or `.mp4` gallery entries in a project) | `public/videos/` |
| Linked documents (PDFs, source code) | `public/docs/` |
| CV (`resume-public.pdf` from the `DanielChahine004/Resume` repo, which leaves out phone and suburb) | `public/resume.pdf` |

**Add a project:** copy any file in `src/content/projects/`, edit the frontmatter.
`featured: true` gives it a large card and its own page (the Markdown body).

## Commands

```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # outputs to dist/
```

`npm run build` first runs `scripts/fetch-wix-assets.mjs`, which downloads any referenced
images, videos and documents from the old Wix site that aren't already in the repo. Commit
`src/assets/wix/`, `public/videos/`, `public/docs/` and `public/resume.pdf` once downloaded so the site no longer depends on Wix.

## Deploy (GitHub Pages)

Live at https://danielchahine004.github.io. Every push to `main` rebuilds and publishes the site through `.github/workflows/deploy.yml`. If you add a custom domain, also update `site` in `astro.config.mjs`.
