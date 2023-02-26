import { createEffect } from 'solid-js';
import { useNavigate } from 'solid-start';
import { Product as WCProduct } from '~/lib/schemas/wcProducts';
import { sps } from '~/styles/sprinkles.css';
import { productImage, productWrapper } from './catalogue.css';

type Props = {
	item: WCProduct;
}

export const Product = (props: Props) => {
	const navigate = useNavigate();
	const desc = document.createElement('div');

	desc.className = sps({ display: 'flex' });

	createEffect(() => {
		desc.innerHTML = props.item.short_description;
	});

	return <div class={productWrapper}>
		<img src={props.item.images[0].src} alt={props.item.images[0].alt} class={productImage}/>
		<div class={sps({ display: 'flex', flexDirection: 'column', gap: 'medium'})}>
			{props.item.name} - {props.item.price} ₾
			{desc}
			<button onClick={() => navigate(`/products/${props.item.id}`)}>See More</button>
		</div>
	</div>; 
};