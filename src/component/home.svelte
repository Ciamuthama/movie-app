<script lang="ts">
    import Card from './cardComponent.svelte'
    export let movie:any

</script>

<main  class="flex flex-wrap justify-center mb-5 ">
    {#each movie as movies}
    <div class="mx-2 "> 
      <a href="/{movies.id}"> 
        <Card {movies}/>
    </a>
</div>
        {/each}
</main>