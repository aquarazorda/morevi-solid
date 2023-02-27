import { createSignal } from 'solid-js';
import { useNavigate } from 'solid-start';
import server$ from 'solid-start/server';
import { attemptBuyProduct } from '~/server/payze';
import { checkAvailability } from '~/server/woocommerce';
import { Product } from './schemas/wcProducts';

type ShoppingCartType = Product[];

export const [shoppingCart, setShoppingCart_] = createSignal<ShoppingCartType>([]);

export const loadCartFromStore = () => {
	const cart = window?.localStorage.getItem('shoppingCart');
	if (cart) setShoppingCart_(JSON.parse(cart));
};

export const isInShoppingCart = (id: number) => shoppingCart().find(product => product.id === id);

export const setShoppingCart = (products: Product[]) => {
	setShoppingCart_(products);
	window.localStorage.setItem('shoppingCart', JSON.stringify(products));
};

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

export const initializeBuy = async (shoppingCart: Product[]) => {
	const productIds = shoppingCart.map(product => product.id);
	if (!productIds?.length) return;
	const availability = await server$(checkAvailability)(productIds);

	if (!availability) return;
	
	const { available, unavailable } = availability;

	if (unavailable.length) {
		const newCart = shoppingCart.map(product => {
			if (unavailable.find(unavailableProduct => unavailableProduct.id === product.id)) {
				return { ...product, stock_quantity: 0 };
			}
			return product;
		});

		return setShoppingCart(newCart);
	}

	const redirectUrl = await attemptBuyProduct({
		amount: shoppingCart.reduce((acc, product) => acc + parseInt(product.price), 0),
		currency: 'GEL',
		lang: 'ka',
		info: {
			description: available.map(({name}) => name).join(', '),
			image: available[0].images[0].src,
			name: 'ფირფიტები'
		}
	});

	return redirectUrl;
};