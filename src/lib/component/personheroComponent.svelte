<script lang="ts">
    export let person:any

    const getYear = (date:any)=>{
        const d = new Date(date)
        return d.getFullYear()
    }

   
</script>
<div>
    {#each person as item}
        <h2>{item.birthday}</h2>
    {/each}
</div>