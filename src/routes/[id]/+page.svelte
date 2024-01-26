<script>

    export let data;
</script>
<svelte:head>
	<title>
		{data.title}
	</title>
	<link rel="shortcut icon" href={'https://image.tmdb.org/t/p/w500' + data.poster_path} type="image/x-icon">
</svelte:head>

<div>
	<div class="flex flex-wrap items-center transition-all">
		<img
			src={'https://image.tmdb.org/t/p/original' + data.poster_path}
			alt={data.title}
			loading="lazy"
			class="skeleton relative rounded mx-4 mt-3 object-fit lg:h-full max-sm:h-48 transition-all"
		/>
		<div class="mx-4">
		<div>	
      <h3 class="text-xs font-thin text-white/90 mt-1">{data.tagline}</h3>
			<h1 class="text-white text-2xl font-bold">{data.title}</h1>
    </div>
<div class="flex my-2">
  {#each data.genres as g}
     <h4 class="text-[0.6rem] font-semibold">{g.name}<span class="mx-1">|</span></h4>
     {/each}
     <h4 class="text-[0.6rem] text-black bg-white px-[0.1rem] rounded">{Math.floor(data.vote_average)}/10</h4>
</div>
			<p class="text-white/70 max-sm:text-xs font-thin">{data.overview}</p>
      
		</div>
	</div>
	
</div>