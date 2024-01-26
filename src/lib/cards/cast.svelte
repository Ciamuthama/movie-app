<script lang="ts">
	import CastComponent from '$lib/component/castComponent.svelte';
    import { tick} from 'svelte'
    import {fade} from 'svelte/transition'
    import { Swiper, SwiperSlide } from "swiper/react";
    import 'swiper/css';
	

    let cast:any = []
    export let collection:any
    let innerWidth: any;
    let sliderPreview:any

    const setSliderPreview =async (w:any) => {
        await tick();
		if (w >= 1024) {
			sliderPreview = 8;
		} else if (w >= 768) {
			sliderPreview = 5;
		} else {
			sliderPreview = 3.2;
		}
    }

    $: if (collection) {
		cast = collection;
	}

    $: if(innerWidth){
        setSliderPreview(innerWidth);
    }

</script>

<svelte:window bind:innerWidth/>
<div>
    <Swiper spaceBetween={10} slidesPerView={sliderPreview}>
		{#each cast as person, index}
			<SwiperSlide>
				<div in:fade={{ duration: 300, delay: index * 100 }}>
                    <CastComponent {person} />
                </div>
			</SwiperSlide>
		{/each}
	</Swiper>
</div>

