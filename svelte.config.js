import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			appDir: 'app',
			pages: 'build',
			fallback: '404.html',
			precompress: 'false',
			strict: 'true',
			prerender: {
				default: true
			}
		}),
		paths: {
			base: ''
		}
	},
	preprocess: vitePreprocess()
};

export default config;
