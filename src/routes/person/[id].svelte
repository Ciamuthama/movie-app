<script context="module">
    import Person from '$lib/services/persons'

    // @ts-ignore
    export async function load({params}){
        const id = params.id;
        // @ts-ignore
        const [person, credit] = await Promise.allSettled([
                    Person.getDetail(id),
                    Person.getCredits(id)
        ])
        return{
            maxage:0,
            props:{
                // @ts-ignore
                person:person.status === 'fulfilled' && person.value?.ok ? (await person.value.json()): null,
                // @ts-ignore
                credit:credit.status === 'fulfilled' && credit.value?.ok ? (await credit.value.json()) : null
            }
        }
    }
</script>

<script lang="ts">
    import {fade} from 'svelte/transition'
    import PersonheroComponent from '$lib/component/personheroComponent.svelte';
  	import Home from '$lib/component/home.svelte';

    export let person:any, credit:any
</script>

<div>
    <div>
        <PersonheroComponent {person} />
    </div>
    <div>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {#each credit.cast as movie, index}
                <div in:fade={{ duration: 300, delay: index * 100 }}>
                    <Home {movie} /></div>
            {/each}
        </div>
    
    </div>
</div>