<script>
  import { assets } from '$app/paths'
  export let name = 'twitter'
  export let url = 'twitter.com'

  let icon = `${assets}/img/social-icons.svg#${name}`
</script>

<a href="https://{url}">
  <svg aria-label={name} width="24" height="24">
    <use href={icon} />
  </svg>
</a>

<style>
  svg {
    filter: contrast(0%);
  }

  svg:hover {
    filter: none;
  }
</style>
