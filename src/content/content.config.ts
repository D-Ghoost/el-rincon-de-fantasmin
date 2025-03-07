import { z, defineCollection } from "astro:content";

const blogPost = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
      title: z.string(),
      date: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      cover: z.string(),
      coverAlt: z.string(),
    }),
  });

export const collections = {
    'blog' : blogPost,
};