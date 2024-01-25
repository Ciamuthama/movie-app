<script lang="ts">
    import Card from './cardComponent.svelte'
    export let movie:any

</script>

<main  class="flex flex-wrap justify-center mb-5 ">
    {#each movie as movies}
       <div class="mx-auto w-[300px] transition-all hover:scale-105"> 
        <Card {movies}/>
    </div>
        {/each}
</main>