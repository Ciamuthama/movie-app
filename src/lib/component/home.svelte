<script lang="ts">
    import Card from './MovieCardComponent.svelte'
    export let movie:any
    console.log(movie);
    

</script>

<main  class="flex flex-wrap justify-center mb-5 ">
    {#each movie as movies}
    <div class="lg:mb-4 max-sm:w-[11rem] h-full md:h-1/2 sm:h-1/2"> 
      <a href="/{movies.id}"> 
        <Card {movies}/>
    </a>
</div>
        {/each}
</main>