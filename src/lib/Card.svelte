<script>
  import { afterUpdate, onMount } from 'svelte'
  import Rating from '$lib/Rating.svelte'
  import { cartStore } from '$lib/data/store'

  export let title = ''
  export let author = ''
  export let summary = ''
  export let level = ''
  export let rating = ''
  export let sale = ''
  export let price = ''
  export let list = false

  let stars = ~~rating
  let half = isInt(rating)
  let deal = ((price - sale) / sale) * 100 >= 80
  let inCart = false

  function isInt(n) {
    return n % 1 === 0
  }

  //todo abstract to external export for import in header too
  let mediaSml = true
  function mediaQueryHandler(e) {
    mediaSml = e.matches
  }

  function handleEnrollClick(e) {
    let newCourse = { title, author, summary, level, rating, price, sale }

    $cartStore = [newCourse, ...$cartStore]
  }

  function handleRemoveClick(e) {
    let newCourse = { title, author, summary, level, rating, price, sale }

    $cartStore = $cartStore.filter((course) => course.title !== newCourse.title)
  }

  onMount(() => {
    const mediaListener = window.matchMedia('(max-width: 38.75em)')
    mediaSml = mediaListener.matches
    mediaListener.addEventListener('change', mediaQueryHandler)
  })

  afterUpdate(() => {
    inCart = $cartStore.some((course) => course.title === title)
  })
</script>

<article class="card" class:list>
  <div class="flex">
    <div class="pill" data-level={level}>{level}</div>

    <div class="rating">
      {rating}
      <Rating {mediaSml} {stars} {half} />
    </div>
  </div>

  <header class="content space">
    <h2>{title}</h2>
    <div class="author">{author}</div>

    {#if summary && summary.length <= 175}
      <p>{summary.substring(0, 115)}...</p>
    {/if}
  </header>

  <footer class="flex">
    <div class="price">
      <div class:sale class:deal>
        ${price}
      </div>

      {#if sale}
        <div>${sale}</div>
      {/if}
    </div>

    {#if inCart}
      <button
        class="pill lrg"
        style="--clr-bg: maroon;"
        on:click={handleRemoveClick}>Remove</button
      >
    {:else}
      <button class="pill lrg" on:click={handleEnrollClick}>Enroll</button>
    {/if}
  </footer>
</article>

<style lang="scss">
  @use './scss/vars' as *;

  .card {
    --spacer: 1em;
    min-height: 420px;
    padding: 1.5rem 1rem;
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: 2rem;
    align-items: center;
    background-color: var(--clr-neutral-200);
    border-radius: var(--br);

    @media (max-width: $mediaSml) {
      max-width: 350px;
      place-self: center;
    }
  }

  .list {
    min-height: auto;
  }

  button.lrg {
    --clr-bg: var(--clr-neutral-900);
    &:hover,
    &:active {
      --clr-bg: revert;
    }
  }

  .content {
    align-self: end;
  }

  .author {
    color: var(--clr-neutral-500);
    font-size: var(--fs-200);
  }

  .price {
    position: relative;
    font-size: var(--fs-600);
  }

  .sale {
    color: var(--clr, var(--clr-neutral-500));
    font-size: var(--fs-200);
    text-decoration: line-through;

    &::after {
      content: 'SALE';
      position: absolute;
      transform: translateX(0.25em);
    }
  }

  .deal {
    --clr: var(--clr-primary-400);
  }

  [data-level='intermediate'] {
    --clr-bg: var(--clr-secondary-400);
  }

  [data-level='expert'] {
    --clr-bg: maroon;
  }

  [data-level='grandmother'] {
    --clr-bg: plum;
  }
</style>
