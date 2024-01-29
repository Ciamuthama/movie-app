<script lang="ts">
	import SimilarMovie from '$lib/component/SimilarMovie.svelte';
	import { Button, Drawer } from 'svelte-ux';
	import MovieDetails from '$lib/component/movieDetails.svelte';
	import PersonheroComponent from '$lib/component/personheroComponent.svelte';
	import VideoCard from '$lib/cards/VideoCard.svelte';

	export let data;
	let details = data.detailsData;
	let similar = data.similarData;
	let person = data.creditData;
	let video = data.videoData
</script>

<div class="mx-4">
	<MovieDetails {details} />
	<VideoCard {video}/>
	<PersonheroComponent {person} />
	<SimilarMovie {similar} />
</div>
