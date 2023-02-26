import {
	defineProperties,
	createSprinkles,
} from '@vanilla-extract/sprinkles';
import { themeVars } from './themes/base.css';

const space = {
	none: 0,
	small: '4px',
	medium: '8px',
	large: '16px',
	bigMargin: '60px',
	// etc.
};

const responsiveProperties = defineProperties({
	conditions: {
		mobile: { '@media': 'screen and (min-width: 768px)' },
		// tablet: { '@media': 'screen and (min-width: 768px)' },
		desktop: { }
	},
	defaultCondition: 'desktop',
	properties: {
		display: ['none', 'flex', 'block', 'inline'],
		flexDirection: ['row', 'column'],
		justifyContent: [
			'stretch',
			'flex-start',
			'center',
			'flex-end',
			'space-around',
			'space-between'
		],
		alignItems: [
			'stretch',
			'flex-start',
			'center',
			'flex-end'
		],
		paddingTop: space,
		paddingBottom: space,
		paddingLeft: space,
		paddingRight: space,
		gap: space,
		borderRadius: space,
		borderTopLeftRadius: space,
		borderBottomLeftRadius: space,
		marginBottom: space,
	},
	shorthands: {
		padding: [
			'paddingTop',
			'paddingBottom',
			'paddingLeft',
			'paddingRight'
		],
		paddingX: ['paddingLeft', 'paddingRight'],
		paddingY: ['paddingTop', 'paddingBottom'],
		placeItems: ['justifyContent', 'alignItems'],
		borderLeft: ['borderTopLeftRadius', 'borderBottomLeftRadius']
	}
});

const unresponsiveSpace = {
	item: '140px',
};

const unresponsiveProperties = defineProperties({
	properties: {
		maxHeight: unresponsiveSpace,
		height: unresponsiveSpace,
		width: unresponsiveSpace,
	}
});

export const colorProperties = defineProperties({
	properties: {
		color: themeVars.colors,
		background: themeVars.colors,
		backgroundColor: themeVars.colors,
		borderColor: themeVars.colors
		// etc.
	}
});

export const sps = createSprinkles(
	responsiveProperties,
	unresponsiveProperties,
	colorProperties
);