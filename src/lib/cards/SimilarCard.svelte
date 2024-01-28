<script lang="ts">
    export let movie:any
</script>

<div class="relative w-[25rem] max-sm:w-72">
    <img
        src={'https://image.tmdb.org/t/p/original' + movie.poster_path}
        alt={movie.title}
        loading="lazy"
        class="skeleton relative rounded mx-4 mt-3  w-[25rem] h-56 max-sm:h-48 transition-all"
    />
    <div
        class="absolute bottom-0  rounded-b bg-gradient-to-t from-black/80 rounded mx-4 mt-3 object-fit h-56 max-sm:h-48 w-[25.1rem] max-sm:w-72"
    ></div>
</div>