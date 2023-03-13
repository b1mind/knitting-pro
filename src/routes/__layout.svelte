<script context="module">
  export const prerender = true
</script>

<script>
  import { page } from '$app/stores'

  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'

  import '../lib/scss/global.scss'
  $: isHome = $page.url.pathname === '/'
</script>

<div class="wrapper" class:isHome>
  <Header />

  <main class="space">
    <slot />
  </main>

  {#if !isHome}
    <Footer />
  {/if}
</div>

<style lang="scss">
  @use '../lib/scss/vars' as *;
  .wrapper {
    min-height: 100%;
    display: grid;
    grid-template-columns: 1fr minmax(240px, $mediaLrg) 1fr;
    grid-template-rows: auto auto 1fr auto;
    grid-template-areas:
      '. head .'
      '. courseNav .'
      '. main .'
      '. foot .';
  }

  .isHome {
    grid-template-rows: 1fr auto auto 1fr;
    grid-template-areas:
      '. . .'
      '. head .'
      '. courseNav .'
      '. . .';
  }

  main {
    grid-area: main;
    max-width: $mediaLrg;

    @media (max-width: $mediaSml) {
      --spacer: 2em;
    }
  }
</style>
