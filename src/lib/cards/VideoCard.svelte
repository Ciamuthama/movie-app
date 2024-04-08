<script>
	export let video;
	let trailer = video.results
  
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
	on:click={openModal}>Watch</Button
>

{#if isModalOpen}
	<div
		id="my_modal_1"
		class="openmodal bg-black/50 absolute z-10 top-0 left-0 w-full h-full flex items-center justify-center"
	>
		<div class="openmodal-box bg-white">
			{#each trailer as movie}
					<iframe
						width="560"
						height="315"
						src="https://vidsrc.xyz/embed/movie/{movie.id}"
						title={movie.title}
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
			{/each}
			<div class="openmodal-backdrop">
				<form on:submit={closeModal} method="dialog" class="openmodal-backdrop">
					<!-- if there is a button in form, it will close the modal -->
					<button class="openbtn">Close</button>
				</form>
			</div>
		</div>
	</div>
{/if}
