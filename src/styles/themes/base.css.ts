import { createThemeContract } from '@vanilla-extract/css';

export const themeVars = createThemeContract({
	colors: {
		hover: null,
		textPrimary: null,
		textSecondary: null,
		textTertiary: null,
		bg: null,
		bgSecondary: null,
		bgButton: null,
		borderMain: null,
	}
});