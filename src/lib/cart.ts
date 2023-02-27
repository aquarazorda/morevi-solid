import { createSignal } from 'solid-js';
import { Product } from './schemas/wcProducts';

type ShoppingCartType = Product[];

const [shCart, setShoppingCart_] = createSignal<ShoppingCartType>([]);

export const loadCartFromStore = () => {
	const cart = window?.localStorage.getItem('shoppingCart');
	if (cart) setShoppingCart_(JSON.parse(cart));
};

export const shoppingCart = shCart;

export const isInShoppingCart = (id: number) => shoppingCart().find(product => product.id === id);

export const addToShoppingCart = (product: Product) => {
	const cart = [...shoppingCart(), product];
	setShoppingCart_(cart);
	window.localStorage.setItem('shoppingCart', JSON.stringify(cart));
};

export const removeFromShoppingCart = (id: number) => {
	const cart = shoppingCart().filter(product => product.id !== id);
	setShoppingCart_(cart);
	window.localStorage.setItem('shoppingCart', JSON.stringify(cart));
};