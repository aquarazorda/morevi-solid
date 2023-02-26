import { createEffect, createMemo, createSignal, For, Suspense } from 'solid-js';
import { useProducts } from '~/resources/useProducts';

export const Catalogue = () => {
	const [page, setPage] = createSignal(1);
	const [products, setProducts] = createSignal<any[]>([]);
	const res = createMemo(() => useProducts(page));

	createEffect(() => {
		if (res().data && res().isSuccess) setProducts(prev => [...prev, ...res().data as any[]]);
	});

	return <Suspense fallback={<div>Loading...</div>}>
		<div>
			<For each={products()}>
				{product => <div>{product.name}</div>}
			</For>
			<button onClick={() => setPage(page() + 1)} disabled={res().isFetching}>Next</button>
		</div>
	</Suspense>;
};