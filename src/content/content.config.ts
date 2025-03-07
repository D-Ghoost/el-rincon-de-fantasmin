import { z, defineCollection } from "astro:content";

const myseltPost = defineCollection({
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
    'myself' : myseltPost,
};