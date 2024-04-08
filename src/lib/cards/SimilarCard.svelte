<script lang="ts">
    export let movie:any

    const getYear = (date: any) => {
		const d = new Date(date);
		return d.getFullYear();
	};
</script>

<div class="relative w-[25rem] max-sm:w-72">
    <img
        src={'https://image.tmdb.org/t/p/original' + movie.poster_path}
        alt={movie.title}
        loading="lazy"
        class="skeleton relative rounded mt-3  w-[25rem] h-56 max-sm:h-48 transition-all"
    />
    <div
        class="absolute bottom-0  rounded-b bg-gradient-to-t from-black/80 rounded mt-3 object-fit h-56 max-sm:h-48 w-[25.1rem] max-sm:w-72"
    >
<div class="absolute bottom-0 pl-4">
    <p class="text-white font-bold">{movie.title}</p>
    <p class="text-white">{getYear(movie.release_date)}</p>
</div>
</div>
</div>