import { style, globalStyle } from '@vanilla-extract/css';
import { themeVars } from './themes/base.css';

const oxanium = 'Oxanium, sans-serif';

export default globalStyle('html, body', {
	fontFamily: oxanium,
	color: themeVars.colors.textPrimary,
	backgroundColor: themeVars.colors.bg,
});

export const bodyStyle = style({
	padding: '2% 5%'
});

export const flexCentered = style({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
});