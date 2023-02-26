import { z } from 'zod';

export const categorySchema = z.object({
	id: z.number(),
	name: z.string(),
	slug: z.string(),
});

export const imageSchema = z.object({
	alt: z.string(),
	src: z.string(),
});

export const productSchema = z.object({
	id: z.number(),
	name: z.string(),
	categories: z.array(categorySchema),
	images: z.array(imageSchema),
	price: z.string(),
	short_description: z.string(),
	stock_quantity: z.number(),
});

export const productSchemaList = z.array(productSchema);

export type Product = z.infer<typeof productSchema>;