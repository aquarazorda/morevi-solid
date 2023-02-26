import { styleVariants } from '@vanilla-extract/css';
import { sps } from './sprinkles.css';

const base = {
	background: 'none',
	border: 'none',
	font: 'inherit',
	cursor: 'pointer',
	outline: 'inherit',
	padding: '0 12px',
	lineHeight: '19px',
	fontWeight: 800,
	fontSize: 16,
	height: 32
};

const black = [base, sps({ borderRadius: 'medium', backgroundColor: 'bgButton', color: 'textPrimary' })];

const plain = [base, sps({ color: 'textPrimary'})];

export const btn = styleVariants({
	plain,
	black
});

