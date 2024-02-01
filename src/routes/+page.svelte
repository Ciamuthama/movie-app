<script lang="ts">
	import MovieHero from '$lib/component/MovieHero.svelte';
	import TrendingComponent from '$lib/component/trendingComponent.svelte';
	import Home from '../lib/component/home.svelte';
	export let data;
	let discover = data.discoverData.results;
	let upcoming = data.upcomingData.results;
	let trending = data.trendingData.results
</script>

<div class="flex flex-col justify-center w-full">
	<MovieHero {discover} />
	<TrendingComponent {trending}/>
	<Home {upcoming} />
</div>
