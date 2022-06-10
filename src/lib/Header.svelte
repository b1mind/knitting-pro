<script>
  import Nav from '$lib/Nav.svelte'
  import { page } from '$app/stores'
  import { onMount } from 'svelte'

  $: isHome = $page.url.pathname === '/'
  $: isCourse = !isHome

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

      <a href="/cart">
        <svg height="35" width="35" viewBox="0 0 30 30">
          <circle r="15" cx="15" cy="15" />
          <circle r="10" cx="20" cy="10" fill="blueviolet" />
        </svg>
      </a>
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
