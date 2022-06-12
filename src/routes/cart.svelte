<script>
  import Card from '$lib/Card.svelte'
  import { cartStore } from '$lib/data/store'
</script>

<div class="container">
  <p>
    Items in cart
    {$cartStore.length}
  </p>

  <div class="grid">
    {#each $cartStore as { ...course }}
      <Card {...course} />
    {/each}
  </div>
</div>

<style lang="scss">
</style>
