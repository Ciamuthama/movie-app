<script lang="ts">
    export let person:any
</script>

<div>
    <a href="/person/{person.id}">
    <h2>{person.name}</h2>
    <h2>{person.character}</h2>
    </a>
</div>