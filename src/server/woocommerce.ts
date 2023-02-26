import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import { APIEvent, json } from 'solid-start';

const wcApi = new WooCommerceRestApi({
	url: 'https://morevi.ge',
	consumerKey: import.meta.env.VITE_WP_CONSUMER_KEY,
	consumerSecret: import.meta.env.VITE_WP_CONSUMER_SECRET,
	version: 'wc/v3'
});

export const getProducts = async ({ params }: APIEvent) => {
	const res = await wcApi.get('products', { 
		per_page: 8, 
		page: params.page || 1,
		status: 'publish'
	});
	return json(res.data);
};