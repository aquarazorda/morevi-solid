import { createQuery } from '@tanstack/solid-query';
import { Accessor } from 'solid-js';
import { getProducts } from '~/lib/woocommerce';
import { queries } from './queries';

export const useProducts = (page: Accessor<number>) => createQuery(
	() => queries.products(page()), 
	() => getProducts(page()), {
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
		refetchOnMount: false,
	}
);