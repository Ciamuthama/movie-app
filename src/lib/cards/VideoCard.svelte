<script>
	export let details;
	let movie = details
	
  
	import { Button, Drawer } from 'svelte-ux';

	let isModalOpen = false;

	function openModal() {
		isModalOpen = true;
	}

	function closeModal() {
		isModalOpen = false;
	}
</script>

<Button
	class=" relative bg-[#c2410c] mt-2 text-white hover:bg-[#fb510e] openbtn"
	><a target="_blank" href="https://vidsrc.xyz/embed/movie/{movie.imdb_id}">Watch {movie.title}</a></Button>

