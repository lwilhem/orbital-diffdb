import adapter from "@sveltejs/adapter-auto"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  // Consult https://svelte.dev/docs/svelte/await-expressions
  // for more information about await expressions & async behavior in sveltekit
  compilerOptions: {
    experimental: {
      async: true,
    },
  },

  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter(),

    // Consult https://svelte.dev/docs/kit/remote-functions
    // for more information about remote functions in sveltekit
    experimental: {
      remoteFunctions: true,
    },
  },
}

export default config
