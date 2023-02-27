import { createQuery } from '@tanstack/solid-query';
import { Accessor } from 'solid-js';
import server$ from 'solid-start/server';
import { getProducts } from '~/server/woocommerce';
import { queries, defaultQueryParams } from './queries';

export const useProducts = (page: Accessor<number>) => createQuery(
	() => queries.products(page()), 
	() => server$(getProducts)(page()),
	defaultQueryParams
);