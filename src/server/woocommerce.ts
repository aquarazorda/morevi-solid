import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import { APIEvent, json } from 'solid-start';
import { productSchema, productSchemaList } from '~/lib/schemas/wcProducts';

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