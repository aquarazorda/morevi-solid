import { array, number, refinement, string, type, TypeOf } from 'io-ts';


export const categorySchema = type({
	id: number,
	name: string,
	slug: string,
});

export const imageSchema = type({
	alt: string,
	src: string,
});

export const productSchema = type({
	id: number,
	name: string,
	categories: array(categorySchema),
	images: array(imageSchema),
	price: string,
	short_description: string,
	stock_quantity: refinement(number, n => n >= 0),
});

export const productSchemaList = array(productSchema);

export type Product = TypeOf<typeof productSchema>;
export type ProductList = TypeOf<typeof productSchemaList>;