<script lang="ts">
	import { Shine } from 'svelte-ux';
	import MdiStar from '~icons/mdi/star';

	export let details: any;

	const getYear = (date: any) => {
		const d = new Date(date);
		return d.getFullYear();
	};
</script>

<div>
	<div class="flex flex-row gap-3 transition-all w-full">
		<Shine>
			<div class="relative bg-gradient-to-t from-black/90">
				<img
					src={'https://image.tmdb.org/t/p/original' + details.poster_path}
					alt={details.title}
					loading="lazy"
					class="skeleton relative rounded mt-3 object-fit max-sm:h-64 max-w-full w-[26rem] min-w-44 transition-all"
				/>
				
			</div>
		</Shine>
		<div>
			<div>
				<h3 class="text-xs font-thin text-white/90 mt-1">{details.tagline}</h3>
				<h1 class="text-white text-2xl font-bold">{details.title}</h1>
			</div>
			<div class="flex items-center my-2">
				{#each details.genres as g}
					<h4 class="text-[0.6rem] font-semibold">{g.name}<span class="mx-1">|</span></h4>
				{/each}
				<h4 class="flex items-center text-[0.6rem] font-bold text-[#c2410c] bg-white p-1 rounded-lg">
					<MdiStar color='#c2410c' />
					{Math.floor(details.vote_average)}/10
				</h4>
			</div>
			<p class="text-white/70 max-sm:text-xs font-thin">{details.overview}</p>
		</div>
	</div>
</div>
