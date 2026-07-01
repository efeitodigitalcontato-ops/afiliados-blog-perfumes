import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		category: z.string().optional(),
		author: z.string().default('Equipe Bibliolab'),
		reviewedProducts: z.array(z.object({
			id: z.string().optional(),
			title: z.string(),
			image: z.string(),
			rating: z.number(),
			reviewsCount: z.string(),
			amazonLink: z.string(),
			priceEstimate: z.string(),
			specs: z.array(z.string()),
			pros: z.array(z.string()),
			cons: z.array(z.string()),
			description: z.string(),
		})).optional(),
	}),
});

export const collections = { blog };
