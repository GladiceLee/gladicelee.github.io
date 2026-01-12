import { z, defineCollection } from "astro:content";
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    worksImage1: z.object({
      url: z.string(),
      alt: z.string()
    }),
    worksImage2: z.object({
      url: z.string(),
      alt: z.string()
    }),
    category: z.string(),
    tool: z.string(),
    website: z.string().optional(),
    analysis_report: z.string().optional(),
    github: z.string(),
  })
});

const postsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    date: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    link: z.string(),
  })
});

export const collections = {
  projects: projectsCollection,
  posts: postsCollection
};

