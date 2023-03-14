// import { createEffect, Show } from 'solid-js';
// import { useNavigate } from 'solid-start';
// import { addToShoppingCart, isInShoppingCart, removeFromShoppingCart } from '~/lib/cart';
// import { Product as WCProduct } from '~/lib/schemas/wcProducts';
// import { wh100 } from '~/styles/common.css';
// import { sps } from '~/styles/sprinkles.css';
// import { productDescriptionWrapper, productImage, productWrapper } from './catalogue.css';

// type Props = {
// 	item: WCProduct;
// }

// export const Product = (props: Props) => {
// 	const navigate = useNavigate();
// 	const desc = document.createElement('div');

// 	desc.className = sps({ display: 'flex' });

// 	createEffect(() => {
// 		desc.innerHTML = props.item.short_description;
// 	});

// 	return <div class={productWrapper}>
// 		<div class={productImage}>
// 			<img src={props.item.images[0].src} alt={props.item.images[0].alt} class={wh100} />
// 		</div>
// 		<div class={productDescriptionWrapper}>
// 			{props.item.name} - {props.item.price} ₾
// 			<div>{desc}</div>
// 			<button onClick={() => navigate(`/products/${props.item.id}`)}>See More</button>
// 			<Show when={!isInShoppingCart(props.item.id)}>
// 				<button onClick={() => addToShoppingCart(props.item)}>Add to shopping cart</button>
// 			</Show>
// 			<Show when={isInShoppingCart(props.item.id)}>
// 				<button onClick={() => removeFromShoppingCart(props.item.id)}>Remove from cart</button>
// 			</Show>
// 		</div>
// 	</div>; 
// };