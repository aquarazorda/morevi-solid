import { createEffect, createMemo } from 'solid-js';
import { template } from 'solid-js/web';
import { Product as WCProduct } from '~/lib/schemas/wcProducts';
import { flexCentered } from '~/styles/common.css';
import { sps } from '~/styles/sprinkles.css';
import { productImage, productWrapper } from './catalogue.css';

type Props = {
	item: WCProduct;
}

const createElem = (el: string) => {
	const elem = template(el, 2);
	
	return elem.cloneNode(true) as HTMLElement;
};

export const Product = (props: Props) => {
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
		</div>
	</div>; 
};