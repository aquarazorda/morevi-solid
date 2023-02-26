type Category = {
	id: number;
	name: string;
	slug: string;
}

type Image = {
	alt: string;
	src: string;
}

export type Product = {
	name: string;
	categories: Category[];
	images: Image[];
	price: string;
	short_description: string;
	stock_quantity: number;
}

export const getProducts = async (page: number) => {
	const res = await fetch(`/api/products/${page}`);
	const list = await res.json() as Product[];
	
	return list;
};