import solid from 'solid-start/vite';
import vercel from 'solid-start-vercel';
import { defineConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
	plugins: [
		solid({ ssr: true, adapter: vercel({
			prerender: {
				expiration: 60
			}
		}) }),
		vanillaExtractPlugin()
	],
});
