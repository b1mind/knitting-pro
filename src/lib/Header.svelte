<script>
  import { page } from '$app/stores'
  import { onMount } from 'svelte'

  import { cartStore } from '$lib/data/store'

  import Nav from '$lib/Nav.svelte'

  $: isHome = $page.url.pathname === '/'
  $: isCourse = $page.url.pathname.includes('course')

  let mediaSml = true

  function mediaQueryHandler(e) {
    mediaSml = e.matches
  }

  onMount(() => {
    const mediaListener = window.matchMedia('(max-width: 38.75em)')
    mediaSml = mediaListener.matches
    mediaListener.addEventListener('change', mediaQueryHandler)
  })
</script>

<svelte:head>
  <meta
    name="description"
    content="Knitting Pro courses will have you getting warm in no time!"
  />

  <title>KnittingPro {$page.params.slug || $page.url.pathname}</title>
</svelte:head>

<header class="container" class:isHome>
  <div class="nav-top flex" class:isCourse>
    <div class="logo">
      <a href="/">
        {#if mediaSml}
          <img
            src="/img/logo-small.svg"
            alt="KnittingPro Logo"
            width="45px"
            height="21px"
          />
        {:else}
          <img
            src="/img/logo-large.svg"
            alt="KnittingPro Logo"
            width="114px"
            height="21px"
          />
        {/if}
      </a>
    </div>

    <div class="search pill flex">
      <label for="search">
        <input disabled type="text" placeholder="What do you want to learn?" />
      </label>
      <img src="/img/search.svg" alt="search icon" width="24px" height="24px" />
    </div>

    <nav class="nav-user">
      <!-- todo if signed in username -->
      <a class="sign-in" href="/sign-in">Sign In</a>
      <!-- todo if signed in view courses -->
      <a class="pill" href="/start">Get Started</a>

      {#if isCourse}
        <a class="cart" href="/cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22ZM7 17q-1.125 0-1.7-.988q-.575-.987-.05-1.962L6.6 11.6L3 4H1.975q-.425 0-.7-.288Q1 3.425 1 3t.288-.713Q1.575 2 2 2h1.625q.275 0 .525.15t.375.425L5.2 4h14.75q.675 0 .925.5t-.025 1.05l-3.55 6.4q-.275.5-.725.775q-.45.275-1.025.275H8.1L7 15h11.025q.425 0 .7.287q.275.288.275.713t-.288.712Q18.425 17 18 17Z"
            />
          </svg>

          {#if $cartStore.length > 0}
            <div class="total">
              {$cartStore.length}
            </div>
          {/if}
        </a>
      {/if}
    </nav>
  </div>

  {#if isHome}
    <div class="hero">
      <div class="img" />
    </div>
    <h1>Become a knitting pro</h1>
  {/if}

  <Nav />
</header>

<style lang="scss">
  @use '../lib/scss/vars' as *;

  .nav-user {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 0.5rem;
  }

  .cart {
    display: grid;

    & > * {
      grid-area: 1 / 1 / -1 / -1;
    }

    .total {
      justify-self: end;
      width: 24px;
      padding-top: 0.2em;
      aspect-ratio: 1;
      display: grid;
      place-items: center;
      color: white;
      font-size: 0.65rem;
      font-variant-numeric: tabular-nums;
      background-color: var(--clr-primary-400);
      border-radius: 75%;
      border: 2px solid white;
      transform: translate(8px, -10px);
    }
  }

  .nav-top {
    padding-top: 1em;
    padding-bottom: 1em;
  }

  .isHome {
    min-height: 100vh;
    display: grid;
    align-content: center;
    @media (max-width: $mediaLrg) {
      grid-template-rows: auto 1fr auto auto;
    }
  }

  .isCourse {
    box-shadow: 0 30px 50px var(--clr-neutral-200);
  }

  .logo {
    max-height: 21px;
    @media (max-width: $mediaLrg) {
      flex-grow: 2;
    }
  }

  .search {
    --clr-bg: var(--clr-neutral-200);
    max-width: 420px;
    flex-grow: 1;
    @media (max-width: $mediaSml) {
      --clr-bg: transparent;
      flex-grow: 0;
    }
  }

  label,
  input {
    width: 100%;
    @media (max-width: $mediaSml) {
      display: none;
    }
  }

  input {
    border: none;
    background-color: transparent;
  }

  .sign-in {
    @media (max-width: $mediaSml) {
      display: none;
    }
  }

  .img {
    height: 100%;
    min-height: 420px;
    background: url('/img/yarn.png') no-repeat center;
    background-size: cover;
    border-radius: 2.25rem;
    box-shadow: var(--bs);
    overflow: hidden;
    @media (max-width: $mediaSml) {
      min-height: 300px;
    }
  }
</style>
