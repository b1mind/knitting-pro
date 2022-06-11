<script>
  import Card from '$lib/Card.svelte'
  import Footer from '$lib/Footer.svelte'
  import { cartStore } from '$lib/data/store'
</script>

<p>
  Items in cart
  {$cartStore.length}
</p>

{#each $cartStore as { ...course }}
  <Card {...course} />
{/each}
<Footer />

<style lang="scss">
</style>
