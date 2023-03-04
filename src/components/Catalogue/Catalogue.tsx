import { isRight } from 'fp-ts/lib/Either';
import { getOrElse } from 'fp-ts/lib/EitherT';
import { createEffect, createMemo, createSignal, For, onCleanup, Show } from 'solid-js';
import { ProductList } from '~/lib/schemas/wcProducts';
import { useProducts } from '~/resources/useProducts';
import { Product } from './Product';

export const Catalogue = () => {
	const [page, setPage] = createSignal(1);
	const [products, setProducts] = createSignal<ProductList>([]);
	const res = useProducts(page);

	const setNextPage = () => setPage(page() + 1);
	const addProducts = (ps: ProductList) => 
		setProducts(prev => [...prev, ...ps]);

	createEffect(() => 
		res.isSuccess && isRight(res.data) && addProducts(res.data.right)
	);

	const handleScroll = () => {
		if (window.innerHeight + window.scrollY >= document.body.offsetHeight && res.isSuccess) {
			setNextPage();
		}
	};
	
	createEffect(() => {
		window.addEventListener('scroll', handleScroll);
	});

	onCleanup(() => window.removeEventListener('scroll', handleScroll));

	return <Show when={products().length}>
		<div>
			<For each={products()}>
				{product => <Product item={product} />}
			</For>
		</div>
	</Show>;
};