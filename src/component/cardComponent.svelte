<script lang="ts">
    import { Card } from 'svelte-ux';
	export let movies;
</script>

<Card class="flex flex-col mt-6 mb-6 mx-auto" >
	<img
		src={'https://image.tmdb.org/t/p/w500' + movies.poster_path}
		alt={movies.title}
		class="rounded mx-auto object-cover"
	/>

	<div class="flex flex-col justify-end p-2 absolute bottom-0 rounded-b bg-gradient-to-t from-black/70 w-full h-full">
        <h2 class="text-base font-bold text-white mx-2">{movies.title}</h2>
	<p class="font-normal text-sm text-white mx-2">{movies.release_date}</p>
</div>
</Card>
