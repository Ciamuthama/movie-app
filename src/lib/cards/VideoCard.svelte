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
	on:click={openModal}>Watch {movie.title}</Button
>

{#if isModalOpen}
	<div
		id="my_modal_1"
		class="openmodal bg-black/50 absolute z-10 top-0 left-0 w-full h-full flex items-center justify-center"
	>
		<div class="openmodal-box">
			<form on:submit={closeModal} method="dialog" class="openmodal-backdrop">
				<button class="openbtn text-right text-white w-full background-transpalent">X</button>
			</form>
			
				
					<iframe
						width="560"
						height="315"
						src="https://vidsrc.xyz/embed/movie/{movie.imdb_id}"
						title={movie.title}
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
						
					></iframe>
				
			<div class="openmodal-backdrop">
			</div>
		</div>
	</div>
{/if}
