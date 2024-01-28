<script lang="ts">
    import Card from './MovieCardComponent.svelte'
	export let upcoming
   
    let movies = upcoming

</script>

<main  class="grid grid-cols-4 max-sm:grid-cols-2 place-items-center mb-5 ">
    {#each movies as movie}
    <div class="lg:mb-4 h-full md:h-1/2 sm:h-1/2"> 
      <a href="/{movie.id}"> 
        <Card {movie}/>
        
    </a>
</div>
{/each}
</main>