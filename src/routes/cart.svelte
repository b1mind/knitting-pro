<script>
  import Card from '$lib/Card.svelte'
  import { cartStore } from '$lib/data/store'
</script>

<p>
  Items in cart
  {$cartStore.length}
</p>

{#each $cartStore as { ...course }}
  <Card {...course} />
{/each}

<style lang="scss">
</style>
