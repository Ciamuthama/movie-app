<script lang="ts">
	export let trending: any;
</script>

<h1>Hot Today</h1>
<div class="grid gap-2 grid-flow-col overflow-scroll scrollbar-hide mb-6">
	{#each trending as movie}
		<a href="/{movie.id}">
			<div class="relative w-96 max-sm:w-[16rem]">
				<img
					src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path}
					alt={movie.title}
					loading="lazy"
					class="skeleton relative rounded mx-4 mt-3 object-fit w-96 h-56 max-sm:h-[10rem] transition-all"
				/>
				<div
					class="absolute bottom-0 rounded-b bg-gradient-to-t from-black/80 rounded mx-4 mt-3 object-fit h-56 max-sm:h-[10rem] w-96 max-sm:w-[16rem]"
				></div>
			</div></a
		>
	{/each}
</div>
