<script lang="ts">
	import { Card } from "svelte-ux";

	export let cast: any;
	
	
</script>

<div class="flex">
	<Card class='bg-neutral-500 border-0 border-black overflow-hidden skeleton w-48 h-56'>
    <div class="grid">
	<a href="/person/{cast.id}">
		<img
			src={'https://image.tmdb.org/t/p/original' + cast.profile_path}
			alt={cast.title}
			loading="lazy"
			class="image relative rounded object-fit h-56 w-full max-sm:w-58 transition-all group-hover:scale-105 bg-gradient-to-t from-black"
		/>
	</a>
</div>
<div class="absolute w-full bottom-0 pl-2 bg-gradient-to-t from-black">
	<p class="text-white">{cast.original_name}</p>
</div>
</Card>
</div>
