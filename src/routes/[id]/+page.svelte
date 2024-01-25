<script lang="ts">
		export let similar
		let sames = similar.results
</script>

<div>
	{#each sames as same }
		<h2>{same.title}</h2>
	{/each}
</div>
