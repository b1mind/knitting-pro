<script>
  import { assets } from '$app/paths'
  export let alt = ''
  export let img = 'profile-pic'
</script>

<section class="container" class:alt>
  <div class="flex">
    <div class="text space">
      <slot />
      <button class="pill lrg">Get Started</button>
      {#if !alt}
        <button class="lrg">Learn More</button>
      {/if}
    </div>
    <div class="img">
      <picture>
        <source srcset="{assets}/img/{img}.webp" type="image/webp" />
        <source srcset="{assets}/img/{img}.png" type="image/png" />
        <img
          src="{assets}/img/{img}.png"
          alt={img}
          width="325px"
          height="325px"
        />
      </picture>
    </div>
  </div>
</section>

<style lang="scss">
  @use './scss/vars' as *;

  section {
    padding: 5rem 0;
    background-color: var(--bg, var(--clr-neutral-200));
  }

  .flex {
    flex-wrap: wrap-reverse;
    justify-content: space-evenly;
    align-items: center;
    gap: 3rem;
  }

  .text {
    --spacer: 1em;
    max-width: 40ch;
  }

  .img {
    max-width: 325px;
    height: 325px;
    border-radius: 2.25rem;
    box-shadow: var(--bs);
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }

  .alt {
    --bg: transparent;

    .flex {
      justify-content: space-around;
      flex-direction: row-reverse;
    }

    .text {
      max-width: 31ch;
    }

    @media (min-width: $mediaMed) {
      .img {
        min-width: 45%;
        min-height: 600px;
      }
    }
  }
</style>
