<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export function load({ error, status }) {
    return {
      props: {
        title: `${status}: ${error.message}`,
      },
    }
  }
</script>

<script>
  import Footer from '$lib/Footer.svelte'

  export let title
</script>

<h1>{title}</h1>

<Footer />
