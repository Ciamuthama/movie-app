<script lang="ts">
    import Home from "../component/home.svelte"
	export let data;
	let movie = data.results;
</script>

<div>
    
    <Home {movie}/>
	
</div>
