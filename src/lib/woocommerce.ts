import { Product, productSchemaList } from './schemas/wcProducts';


export const getProducts = async (page: number) => {
	const res = await fetch(`/api/products/${page}`);
	const list = await res.json() as Product[];
	const parsed = productSchemaList.safeParse(list);
	
	return parsed.success ? parsed.data : [];
};