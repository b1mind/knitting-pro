<script>
  import Header from '$lib/Header.svelte'
  import '../app.scss'
</script>

<Header />

<main class="space">
  <slot />
</main>

<style lang="scss">
  @use '../lib/scss/vars' as *;

  main {
    width: 100%;
    max-width: $mediaLrg;
    margin: 0 auto;

    @media (max-width: $mediaSml) {
      --spacer: 2em;
    }
  }
</style>
