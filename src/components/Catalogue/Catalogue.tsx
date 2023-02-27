import { createEffect, createSignal, For, onCleanup, Show } from 'solid-js';
import { Product as WCProduct } from '~/lib/schemas/wcProducts';
import { useProducts } from '~/resources/useProducts';
import { Product } from './Product';

export const Catalogue = () => {
	const [page, setPage] = createSignal(1);
	const [products, setProducts] = createSignal<WCProduct[]>([]);
	const res = useProducts(page);

	const setNextPage = () => setPage(page() + 1);

	createEffect(() => {
		if (res.data && res.isSuccess) setProducts(prev => [...prev, ...res.data as WCProduct[]]);
	});

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