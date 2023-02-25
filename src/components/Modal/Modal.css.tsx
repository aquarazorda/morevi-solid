import { style } from '@vanilla-extract/css';

export const modalWrapper = style({
	width: '600px',
	maxWidth: '100%',
	height: '400px',
	maxHeight: '100%',
	position: 'fixed',
	zIndex: '100',
	left: '50%',
	top: '50%',
	transform: 'translate(-50%, -50%)',
	background: 'white',
	boxShadow: '0 0 60px 10px rgba(0, 0, 0, 0.9)',
});

export const modalOverlay = style({
	position: 'fixed',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	zIndex: 50,
	background: 'rgba(0, 0, 0, 0.6)'
}); 