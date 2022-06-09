<script>
  import { page } from '$app/stores'
</script>

<div class="scroll">
  <nav class="flex">
    <ul class="nav-main">
      <li class:active={$page.url.pathname === '/courses'}>
        <a sveltekit:prefetch href="/courses">All courses</a>
      </li>
      <li class:active={$page.params.slug === 'beginner'}>
        <a sveltekit:prefetch href="/courses/beginner">Beginner</a>
      </li>
      <li class:active={$page.params.slug === 'intermediate'}>
        <a sveltekit:prefetch href="/courses/intermediate">Intermediate</a>
      </li>
      <li class:active={$page.params.slug === 'expert'}>
        <a sveltekit:prefetch href="/courses/expert">Expert</a>
      </li>
      <li class:active={$page.params.slug === 'grandmother'}>
        <a sveltekit:prefetch href="/courses/grandmother">Grandmother</a>
      </li>
    </ul>
    <a href="#void">Subscribe</a>
  </nav>
</div>

<style lang="scss">
  @use './scss/vars' as *;

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
    padding: 0 0 1em 0;
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
