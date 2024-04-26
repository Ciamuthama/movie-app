<script lang="ts">
	import { Card } from 'svelte-ux';
	import { Shine, Tilt } from 'svelte-ux';
	import MdiStar from '~icons/mdi/star';
	export let movie: any;
	const getYear = (date: any) => {
		const d = new Date(date);
		return d.getFullYear();
	};
</script>

<Shine>
	<div class="group-hover:scale-105 transition duration-500">
		<Card
			class="flex flex-col flex-wrap flex-shrink h-full mt-6 mb-6 max-sm:m-1 mx-4 max-sm:mx-1 border-0 border-black overflow-hidden skeleton transition ease-out"
		>
		<img
		src={'https://image.tmdb.org/t/p/original' + movie.backdrop_path}
		alt={movie.title}
		loading="lazy"
		class="image relative rounded object-fit h-48 max-sm:h-28 w-full max-sm:w-58 transition-all group-hover:scale-105"
		/>
		
		<div
		class="flex flex-col justify-between p-2 absolute bottom-0 rounded-b bg-gradient-to-t from-black/80 w-full h-full"
		>
		<div class="flex lg:w-1/6 md:w-2/5  max-sm:w-1/4 rounded-xl bg-white items-center justify-center p-[0.1rem] ">
			<MdiStar color="#c2410c" class="h-[0.8rem]" />
			<h4 class=" font-semibold text-[0.8rem] max-sm:text-[0.6rem] text-[#c2410c] pr-[0.3rem]">
				{Math.floor(movie.vote_average)}/10
			</h4>
		</div>
				<div>
				<h2 class="text-base font-bold text-white mx-2 max-sm:text-xs">{movie.title}</h2>
				<p class="font-normal text-sm text-white mx-2 max-sm:text-xs">
					{movie.release_date}
				</p></div>
			</div>
		</Card>
	</div>
</Shine>
