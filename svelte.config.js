import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
			  // This will be called when an HTTP error is encountered during prerendering
			  console.error(`Error while prerendering ${path} from ${referrer}: ${message}`);
			  
			  // Optionally, you can customize the response here
			  // For example, you might want to return a 404 page instead of failing the build
			  if (message.includes('404')) {
				return {
				  status: 404,
				  body: 'Page not found'
				};
			  }
			  throw new Error(message);
			}
	},
	preprocess: vitePreprocess()
};

export default config;
