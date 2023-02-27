import { style, globalStyle, globalFontFace } from '@vanilla-extract/css';
import { themeVars } from './themes/base.css';

const oxanium = 'Oxanium';

globalFontFace(oxanium, {
	src: 'local("Oxanium"), url(/fonts/Oxanium/Oxanium-VariableFont_wght.ttf)',
});

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

export const wh100 = style({
	width: '100%',
	height: '100%'
});