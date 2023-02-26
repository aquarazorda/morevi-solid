import { sps } from '~/styles/sprinkles.css';
import {globalStyle, style} from '@vanilla-extract/css';
import { themeVars } from '~/styles/themes/base.css';

export const productWrapper = style([
	{ border: `0.05px solid ${themeVars.colors.borderMain}` },
	sps({
		display: 'flex',
		borderRadius: 'medium',
		maxHeight: 'item',
		gap: 'large',
		marginBottom: 'bigMargin',
	}),
]);

export const productImage = style([
	sps({
		width: 'item',
		height: 'item',
		borderLeft: 'medium',
	})
]);

globalStyle(`${productWrapper} tbody`, {
	display: 'flex',
	flexWrap: 'wrap'
});

globalStyle(`${productWrapper} p`, {
	margin: 0
});