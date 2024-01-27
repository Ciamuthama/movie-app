<script lang="ts">
    import Card from './MovieCardComponent.svelte'
	export let upcoming
    let movie = upcoming

</script>

<main  class="grid grid-cols-4 max-sm:grid-cols-2 place-items-center mb-5 ">
    {#each movie as movies}
    <div class="lg:mb-4 max-sm:w-[11rem] h-full md:h-1/2 sm:h-1/2"> 
      <a href="/{movies.id}"> 
        <Card {movies}/>
        
    </a>
</div>
{/each}
</main>