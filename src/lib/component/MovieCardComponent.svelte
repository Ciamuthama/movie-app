<script lang="ts">
	import { Card } from 'svelte-ux';
	import { Shine, Tilt } from 'svelte-ux';
	export let movies: any;
	const getYear = (date:any)=>{
        const d = new Date(date)
        return d.getFullYear()
    }
</script>

<Shine>
	<Tilt class="group-hover:scale-105 transition duration-500">
		<Card
			class="flex flex-col flex-wrap flex-shrink h-full mt-6 mb-6 max-sm:m-1 mx-4 max-sm:mx-1 border-0 border-black overflow-hidden skeleton transition ease-out"
		>
			<img
				src={'https://image.tmdb.org/t/p/original' + movies.backdrop_path}
				alt={movies.title}
				loading="lazy"
				class="image relative rounded object-fit h-48 max-sm:h-28 w-full max-sm:w-58 transition-all group-hover:scale-105"
			/>

			<div
				class="flex flex-col justify-end p-2 absolute bottom-0 rounded-b bg-gradient-to-t from-black/80 w-full h-full group-hover:bg-gradient-to-t from-org"
			>
				<h2 class="text-base font-bold text-white mx-2 max-sm:text-xs">{movies.title}</h2>
				<p class="font-normal text-sm text-white mx-2 max-sm:text-xs">{getYear(movies.release_date)}</p>
			</div>
		</Card>
	</Tilt>
</Shine>
