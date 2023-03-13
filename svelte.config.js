// import adapter from '@sveltejs/adapter-node'
import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'
const dev = process.argv.includes('dev')

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
    }),
    // for static make all prerender
    prerender: { default: true },
    paths: {
      base: dev ? '' : '/knitting-pro',
    },
  },
  preprocess: preprocess({}),
}

export default config
