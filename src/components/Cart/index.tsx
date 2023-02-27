import { For } from 'solid-js';
import { shoppingCart } from '~/lib/cart';
import { Product } from '../Catalogue/Product';

export const ShoppingCart = () => {
	return <>
		<For each={shoppingCart()}>
			{product => <Product item={product} />}
		</For>
		<button>Buy</button>
	</>;
};