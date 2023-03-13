<script>
  import { page } from '$app/stores'
  import { assets, base } from '$app/paths'
</script>

<div class="container">
  <div class="scroll">
    <nav class="flex">
      <ul class="nav-main">
        <li class:active={$page.url.pathname === `${base}/courses`}>
          <a sveltekit:prefetch href="{base}/courses">All courses</a>
        </li>
        <li class:active={$page.params.slug === 'beginner'}>
          <a sveltekit:prefetch href="{base}/courses/beginner">Beginner</a>
        </li>
        <li class:active={$page.params.slug === 'intermediate'}>
          <a sveltekit:prefetch href="{base}/courses/intermediate"
            >Intermediate</a
          >
        </li>
        <li class:active={$page.params.slug === 'expert'}>
          <a sveltekit:prefetch href="{base}/courses/expert">Expert</a>
        </li>
        <li class:active={$page.params.slug === 'grandmother'}>
          <a sveltekit:prefetch href="{base}/courses/grandmother">Grandmother</a
          >
        </li>
      </ul>
      <a href="#void">Subscribe</a>
    </nav>
  </div>
</div>

<style lang="scss">
  @use './scss/vars' as *;

  .container {
    width: 100%;
    max-width: 93vw;
    grid-area: courseNav;
  }

  .scroll {
    padding-top: 1em;
    padding-bottom: 2em;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  nav {
    min-width: 100%;
    padding-block-end: 1em;
    border-bottom: 4px solid var(--clr-neutral-200);
  }

  ul.nav-main {
    margin-right: 1em;
    display: flex;
    gap: 1em;
    li {
      min-width: max-content;
    }
  }

  .active {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: -20px;
      right: 0;
      width: 100%;
      height: 4px;
      background-color: var(--clr-neutral-900);
      border-radius: 2px;
      z-index: 1;
    }
  }
</style>
