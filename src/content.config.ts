import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// One Markdown file per project in src/content/projects/.
// `featured: true` → large card + its own page (body = page content).
// `featured: false` → compact card; links to `href` if given, else no page.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    org: z.string().optional(),
    period: z.string().optional(),
    category: z.enum(['Research', 'Industry', 'Software', 'Design', 'Coursework']),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    // Wix video file in public/videos/ (e.g. 56298d_<id>.mp4). Plays in the card, or at the top of a featured project's page.
    video: z.string().optional(),
    // Gallery entries are image filenames, or .mp4 files in public/videos/.
    gallery: z.array(z.string()).default([]),
    // Small organisation logos shown in a featured project's page header.
    logos: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    featured: z.boolean().default(false),
    href: z.string().optional(),
    order: z.number().default(100),
  }),
});

export const collections = { projects };
