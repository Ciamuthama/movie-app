<script lang="ts">
	import MovieHero from '$lib/component/MovieHero.svelte';
	import Home from '../lib/component/home.svelte';
	export let data;
	let discover = data.discoverData.results;
	let upcoming = data.upcomingData.results;
	console.log(upcoming);

	
</script>

<div class="flex flex-col justify-center w-full mx-auto">
	<MovieHero {discover} />
	<Home {upcoming} />
</div>
