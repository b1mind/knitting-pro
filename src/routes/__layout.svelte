<script>
  import { page } from '$app/stores'

  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'

  import '../lib/scss/global.scss'
</script>

<Header />

<main class="space">
  <slot />
</main>

{#if $page.url.pathname !== '/'}
  <Footer />
{/if}

<style lang="scss">
  @use '../lib/scss/vars' as *;

  main {
    grid-area: main;
    max-width: $mediaLrg;

    @media (max-width: $mediaSml) {
      --spacer: 2em;
    }
  }
</style>
