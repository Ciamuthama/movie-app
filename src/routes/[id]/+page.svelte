<script lang="ts">
	import SimilarMovie from '$lib/component/SimilarMovie.svelte';
	import { Shine } from 'svelte-ux';
	import MovieDetails from '$lib/component/movieDetails.svelte';

	export let data;
	let details = data.detailsData;
	let similar = data.similarData;
</script>

<div>
	<MovieDetails {details} />
	<SimilarMovie {similar} />
</div>
