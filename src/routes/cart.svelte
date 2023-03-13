<script>
  import Card from '$lib/Card.svelte'
  import { cartStore } from '$lib/data/store'
</script>

<div class="container">
  <p>
    Items in cart
    {$cartStore.length}
  </p>

  <ul>
    {#each $cartStore as { ...course }}
      <li>
        <Card {...course} list />
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  ul {
    margin: 0;
    display: grid;
    gap: 1rem;
    list-style: none;
  }
</style>
