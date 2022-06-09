<script context="module">
	export async function load({ params }) {
		let slugTitle = params.slug;
		return { props: { slugTitle } };
	}
</script>

<script>
	import Card from '$lib/Card.svelte';
	import Footer from '$lib/Footer.svelte';
	import { courses } from '$lib/data/posts.js';
	export let slugTitle;

	$: coursesFilter = courses.filter((key) => key.level === slugTitle);
</script>

<section class="container">
	<h1>{slugTitle}</h1>
	<div class="grid">
		{#each coursesFilter as { ...course }}
			<Card {...course} />
		{/each}
	</div>

	{#if coursesFilter.length === 0}
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
