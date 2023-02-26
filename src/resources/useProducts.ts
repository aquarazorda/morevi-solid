import { createQuery } from '@tanstack/solid-query';
import { Accessor } from 'solid-js';
import { getProducts } from '~/lib/woocommerce';
import { queries, defaultQueryParams } from './queries';

export const useProducts = (page: Accessor<number>) => createQuery(
	() => queries.products(page()), 
	() => getProducts(page()),
	defaultQueryParams
);