<script lang="ts">
    export let movies:any

    const getYear = (date: any) => {
		const d = new Date(date);
		return d.getFullYear();
	};
</script>
<div>
    <a href="/{movies.id}">
    <h2>{movies.title}</h2>
    </a>
</div>