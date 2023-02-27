import { For } from 'solid-js';
import { useNavigate } from 'solid-start';
import { initializeBuy, shoppingCart } from '~/lib/cart';
import { Product } from '../Catalogue/Product';

export const ShoppingCart = () => {
	const navigate = useNavigate();
	
	const onBuy = async () => {
		const redirectUrl = await initializeBuy(shoppingCart());
		if (redirectUrl) navigate(redirectUrl);
	};

	return <>
		<For each={shoppingCart()} fallback={<div>Empty shopping cart</div>}>
			{product => <Product item={product} />}
		</For>
		<button onClick={() => onBuy()}>Buy</button>
	</>;
};