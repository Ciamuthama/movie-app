<script lang="ts">
	import CastComponent from './castComponent.svelte';

	export let person: any;

	const getYear = (date: any) => {
		const d = new Date(date);
		return d.getFullYear();
	};
</script>

<div class="grid grid-flow-col gap-2 overflow-auto scrollbar-hide mt-4">
	{#each person.cast as cast}
		<CastComponent {cast} />
	{/each}
</div>
