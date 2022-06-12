import adapter from '@sveltejs/adapter-node'
// import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    // for static make all prerender
    // prerender: { default: true },
  },
  preprocess: preprocess({}),
}

export default config
