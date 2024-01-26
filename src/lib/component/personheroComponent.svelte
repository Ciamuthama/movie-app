<script lang="ts">
    export let person:any

    const getYear = (date:any)=>{
        const d = new Date(date)
        return d.getFullYear()
    }

    $: longBiography = person.biography.length > 300
</script>
<div>
    <h2>{person.name}</h2>
</div>