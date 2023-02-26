import { Product } from './schemas/wcProducts';


export const getProducts = async (page: number) => {
	const res = await fetch(`/api/products/${page}`);
	const products = await res.json() as Product[];
	
	return products;
};

export const getProduct = async (id: string) => {
	const res = await fetch(`/api/product/${id}`);
	const product = await res.json() as Product;

	return product;
};