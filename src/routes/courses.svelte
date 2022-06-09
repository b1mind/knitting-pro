<script>
  import Card from '$lib/Card.svelte'
  import Cta from '$lib/Cta.svelte'
  import Footer from '$lib/Footer.svelte'
  import { courses } from '$lib/data/posts.js'
</script>

<section class="container">
  <div class="grid">
    {#each courses as { ...course }}
      <Card {...course} />
    {/each}
  </div>
</section>

<Cta img="yarn">
  <h1 class="title-med">Welcome to the largest knitting community.</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
    reprehenderit quidem quis veritatis repellendus, blanditiis dolor eum quas
    aliquid minima. Architecto quasi eos ducimus ratione et in sunt aliquam eum!
  </p>
</Cta>

<Cta alt="true">
  <div class="title-lrg">Become an instructor</div>
  <p>
    Odio molestiae maxim, porro vitae iusto eaque amet reiciendis error veniam
    asperiores omnis eligendi enim a delectus ipsum.
  </p>
</Cta>

<Footer />

<style lang="scss">
</style>
