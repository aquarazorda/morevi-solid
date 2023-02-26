import { createQuery } from '@tanstack/solid-query';
import { RouteDataArgs } from 'solid-start';
import { getProduct } from '~/lib/woocommerce';
import { defaultQueryParams, queries } from '~/resources/queries';

export function routeData({ params }: RouteDataArgs) {
	return createQuery(
		() => queries.product(params.id),
		() => getProduct(params.id),
		defaultQueryParams
	);
}

export default function Product() {
	return <div>Product</div>;
}