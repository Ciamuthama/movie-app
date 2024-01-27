<script lang="ts">
    import MovieDetails from "./movieDetails.svelte";

    export let collection:any
    let movies ={
        results:[]
    }

    $: if(collection){
        movies = collection
    }
</script>

<div>
    <MovieDetails {movies} />
</div>