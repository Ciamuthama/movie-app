<script lang="ts">
	import { Card } from "svelte-ux";

	export let cast: any;
</script>

<Card class='bg-neutral-500 border-0 border-black overflow-hidden skeleton w-48 h-56'>
    <div class="grid">
	<a href="/person/{cast.id}">
		<img
			src={'https://image.tmdb.org/t/p/original' + cast.profile_path}
			alt={cast.title}
			loading="lazy"
			class="image relative rounded object-fit h-56 w-full max-sm:w-58 transition-all group-hover:scale-105"
		/>
	</a>
	
</div>
</Card>
