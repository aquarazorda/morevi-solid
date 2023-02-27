import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import { json } from 'solid-start';
import { Product, productSchema, productSchemaList } from '~/lib/schemas/wcProducts';

if (!process.env.WP_CONSUMER_KEY || !process.env.WP_CONSUMER_SECRET) {
	throw new Error('WooCommerce is not configured');
}

const wcApi = new WooCommerceRestApi({
	url: 'https://morevi.ge',
	consumerKey: process.env.WP_CONSUMER_KEY,
	consumerSecret: process.env.WP_CONSUMER_SECRET,
	version: 'wc/v3'
});

export const getProducts = async (page: number) => {
	const res = await wcApi.get('products', { 
		per_page: 8, 
		page: page || 1,
		status: 'publish'
	}).then((res) => res.data);
	
	const parsed = productSchemaList.safeParse(res);

	return parsed.success ? parsed.data : [];
};

export const getProduct = async (id: string) => {
	const res = await wcApi.get(`products/${id}`).then((res) => res.data);
	const parsed = productSchema.safeParse(res);

	return json(parsed.success ? parsed.data : null);
};

export const checkAvailability = async (ids: number[]) => {
	const res = await wcApi.get('products', { 
		include: ids
	});
	const parsed = productSchemaList.safeParse(res.data);

	if (!parsed.success) return null;
	
	const { available, unavailable } =  parsed.data.reduce((acc, product) => ({
		available: product.stock_quantity > 0 ? [...acc.available, product] : acc.available,
		unavailable: product.stock_quantity > 0 ? acc.unavailable : [...acc.unavailable, product]
	}), 
	{ available: [] as Product[], unavailable: [] as Product[] });

	return {
		isAvailable: unavailable.length === 0,
		available,
		unavailable
	};
};