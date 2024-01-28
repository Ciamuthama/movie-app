<script lang="ts">
	import SimilarCard from '$lib/cards/SimilarCard.svelte';
	import { Shine } from 'svelte-ux';
    import { fade } from 'svelte/transition';

	export let similar: any;
	let movies = similar.results;

	const getYear = (date: any) => {
		const d = new Date(date);
		return d.getFullYear();
	};
</script>

<div class="grid grid-flow-col gap-4 overflow-auto scrollbar-hide mb-4 lg:mx-0">
	{#each movies as movie,index}
		<Shine >
			<a href="/{movie.id}" data-sveltekit-reload in:fade={{ duration: 300, delay: index * 100 }}>
				<SimilarCard {movie} />
			</a>
		</Shine>
	{/each}
</div>
