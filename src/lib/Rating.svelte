<script>
  export let stars
  export let half

  export let mediaSml = true
</script>

{#if !mediaSml}
  {#each Array(stars) as _}
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00001 1L5.72501 5.61L0.640015 6.345L4.32001 9.935L3.45001 15L8.00001 12.61L12.55 15L11.68 9.935L15.36 6.35L10.275 5.61L8.00001 1Z"
        fill="black"
      />
    </svg>
  {/each}

  {#if !half}
    <svg
      width="14"
      height="14"
      viewBox="4 1 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00001 1L5.72501 5.61L0.640015 6.345L4.32001 9.935L3.45001 15L8.00001 12.61L12.55 15L11.68 9.935L15.36 6.35L10.275 5.61L8.00001 1Z"
        fill="white"
        stroke="black"
      />
      <path
        d="M5.72502 5.61L0.640015 6.35L4.32002 9.935L3.45001 15L8.00002 12.61V1L5.72502 5.61Z"
        fill="black"
      />
    </svg>
  {/if}
{:else}
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.00001 1L5.72501 5.61L0.640015 6.345L4.32001 9.935L3.45001 15L8.00001 12.61L12.55 15L11.68 9.935L15.36 6.35L10.275 5.61L8.00001 1Z"
      fill="black"
    />
  </svg>
{/if}

<style lang="scss">
  svg {
    overflow: visible;
  }
</style>
