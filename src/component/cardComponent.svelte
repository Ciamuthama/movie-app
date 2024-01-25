<script lang="ts">
    import { Card } from 'svelte-ux';
	import { Shine, Tilt } from 'svelte-ux';
	export let movies:any
</script>

<Shine>
	<Tilt class="hover:scale-105 transition duration-500">
		<Card class="flex flex-col mt-6 mb-6 mx-auto border-0 overflow-hidden skeleton transition ease-out" >
	<img
	src={'https://image.tmdb.org/t/p/original' + movies.backdrop_path}
	alt={movies.title}
	loading="lazy"
	class="image relative rounded mx-auto object-fit h-48 w-full transition-all group-hover:scale-105"
	/>
	
	<div class="flex flex-col justify-end p-2 absolute bottom-0 rounded-b bg-gradient-to-t from-black/80 w-full h-full group-hover:bg-gradient-to-t from-org">
        <h2 class="text-base font-bold text-white mx-2">{movies.title}</h2>
	<p class="font-normal text-sm text-white mx-2">{movies.release_date}</p>
</div>
</Card>
</Tilt>
</Shine>
