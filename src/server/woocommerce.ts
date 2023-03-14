import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
// import { Product, ProductList, productSchema, productSchemaList } from '~/lib/schemas/wcProducts';
import { tryCatch, map } from 'fp-ts/lib/TaskEither';
import { pipe } from 'fp-ts/lib/function';
import { isLeft } from 'fp-ts/lib/Either';

if (!process.env.WP_CONSUMER_KEY || !process.env.WP_CONSUMER_SECRET) {
	throw new Error('WooCommerce is not configured');
}

const wcApi = new WooCommerceRestApi({
	url: 'https://morevi.ge',
	consumerKey: process.env.WP_CONSUMER_KEY,
	consumerSecret: process.env.WP_CONSUMER_SECRET,
	version: 'wc/v3'
});

// export const getProducts = (page: number) => pipe(
// 	tryCatch<[], {data: ProductList}>(
// 		() => wcApi.get('products', { 
// 			per_page: 8, 
// 			page: page || 1,
// 			status: 'publish'
// 		}),
// 		() => []
// 	),
// 	map(({ data }) => data)
// )();

// export const getProduct = async (id: string) => pipe(
// 	tryCatch<>(
// 		await wcApi.get(`products/${id}`),
// 		() => null
// 	),
// 	map(({ data }) => data)
// );

// export const checkAvailability = async (ids: number[]) => {
// 	const res = await wcApi.get('products', { 
// 		include: ids
// 	});
// 	const parsed = productSchemaList.decode(res.data);

// 	if (isLeft(parsed)) return null;
	
// 	const { available, unavailable } =  parsed.right.reduce((acc, product) => ({
// 		available: product.stock_quantity > 0 ? [...acc.available, product] : acc.available,
// 		unavailable: product.stock_quantity > 0 ? acc.unavailable : [...acc.unavailable, product]
// 	}), 
// 	{ available: [] as Product[], unavailable: [] as Product[] });

// 	return {
// 		isAvailable: unavailable.length === 0,
// 		available,
// 		unavailable
// 	};
// };