<script context="module">
  export async function load({ params, fetch, session, stuff }) {
    const url = `/api/${params.slug}.json`
    const response = await fetch(url)
    let slugTitle = params.slug

    return {
      status: response.status,
      props: {
        coursesData: response.ok && (await response.json()),
        slugTitle: slugTitle,
      },
    }
  }
</script>

<script>
  import Card from '$lib/Card.svelte'
  import Footer from '$lib/Footer.svelte'
  export let slugTitle
  export let coursesData
</script>

<section class="container">
  <h1>{slugTitle}</h1>
  <div class="grid">
    {#each coursesData as { ...course }}
      <Card {...course} />
    {/each}
  </div>

  {#if coursesData.length === 0}
    <p>There are no {slugTitle} courses open right now.</p>
  {/if}
</section>

<Footer />

<style lang="scss">
  @use '../../lib/scss/vars' as *;

  h1 {
    @media (max-width: $mediaSml) {
      --fs: clamp(2rem, 10vw, 3.85rem);
      text-align: center;
    }
  }
</style>
