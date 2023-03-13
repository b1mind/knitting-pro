// import adapter from '@sveltejs/adapter-node'
import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: null,
      precompress: false,
    }),
    // for static make all prerender
    prerender: { default: true },
  },
  preprocess: preprocess({}),
  paths: {
    base: '/knitting-pro',
  },
}

export default config
