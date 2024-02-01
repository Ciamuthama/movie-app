<script lang="ts">
    import {fade} from 'svelte/transition'
    import PersonheroComponent from '$lib/component/personheroComponent.svelte';
  	import Home from '$lib/component/home.svelte';
    export let data
    let person = data.personData
    let credit = data.creditData
</script>
<div>
    <div>
        <PersonheroComponent {person} />
    </div>
    <div>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {#each credit.cast as upcoming, index}
                <div in:fade={{ duration: 300, delay: index * 100 }}>
                    <Home {upcoming} /></div>
            {/each}
        </div>
    
    </div>
</div>