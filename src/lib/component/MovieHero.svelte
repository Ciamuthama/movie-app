<script lang="ts">
	import '@splidejs/splide/dist/css/themes/splide-default.min.css';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import { Shine } from 'svelte-ux';
	import MdiStar from '~icons/mdi/star';

	export let discover: any;
	const getYear = (date: any) => {
		const d = new Date(date);
		return d.getFullYear();
	};
</script>

<Shine>
	<div class="mx-4 max-sm:mx-3 max-sm:mb-4">
		<Splide options={{ arrowPath: 'false', type: 'loop', autoplay: true }}>
			{#each discover as movies}
			<SplideSlide>
					<a href="/{movies.id}">
					<img
						src={'https://image.tmdb.org/t/p/original' + movies.backdrop_path}
						alt={movies.title}
						loading="lazy"
						class="image relative rounded object-fit h-[33rem] max-sm:h-full w-full max-sm:w-58 transition-all group-hover:scale-105"
					/>
					<div class="absolute top-0 mx-3 mt-1 rounded-xl bg-white flex items-center justify-center p-[0.1rem]">
						<MdiStar color='#c2410c' class='h-[0.9rem]'/>
						<h4 class=" font-semibold text-[0.9rem] max-sm:text-[0.6rem] text-[#c2410c] pr-[0.3rem]">
							{Math.floor(movies.vote_average)}/10 
						</h4>
					</div>
					<div
						class="absolute flex flex-col justify-end w-full h-full bottom-0 right-0 bg-gradient-to-t from-black/80"
					>
						<div class="mx-3 mb-3">
							<h2 class="text-white text-5xl max-sm:text-3xl">{movies.title}</h2>
							<h2 class="text-white max-sm:text-sm">{getYear(movies.release_date)}</h2>
							<p class="text-white max-sm:text-xs font-thin line-clamp-2 w-1/2 fon-">
								{movies.overview}
							</p>
						</div>
					</div>
				</a>
			</SplideSlide>
			{/each}
		</Splide>
	</div>
</Shine>
