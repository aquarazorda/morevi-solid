import { createQuery } from '@tanstack/solid-query';
import { RouteDataArgs } from 'solid-start';
import server$ from 'solid-start/server';
import { defaultQueryParams, queries } from '~/resources/queries';
import { getProduct } from '~/server/woocommerce';

export const routeData = ({ params }: RouteDataArgs) => createQuery(
	() => queries.product(params.id),
	() => server$(getProduct)(params.id),
	defaultQueryParams
);

export default function Product() {
	return <div>Product</div>;
}