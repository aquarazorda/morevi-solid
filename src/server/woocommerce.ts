import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import { json } from 'solid-start';

const wcApi = new WooCommerceRestApi({
	url: 'https://morevi.ge',
	consumerKey: import.meta.env.VITE_WP_CONSUMER_KEY,
	consumerSecret: import.meta.env.VITE_WP_CONSUMER_SECRET,
	version: 'wc/v3'
});

export const getProducts = async () => {
	const res = await wcApi.get('products', { per_page: 20 });
	return json(res.data);
};