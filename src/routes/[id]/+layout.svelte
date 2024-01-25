<script lang="ts">
export let data;
import { onMount } from 'svelte';

  let imageUrl = `https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light`
  let backgroundColor = 'white';

  async function fetchImageColor() {
  try {
   const response = await fetch("https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light", { 
  method: "GET"
});

    if (!response.ok) {
      throw new Error(`Failed to fetch image. Status: ${response.status}`);
    }

    const blob = await response.text();
    const imageData = await createImageBitmap(blob);

    // Get the average color of the image
    const { r, g, b } = getAverageColor(imageData);

    // Set the background color
    backgroundColor = `rgb(${r},${g},${b})`;
  } catch (error) {
    console.error('Error fetching image color:', error);
  }
}


  onMount(() => {
    fetchImageColor();
  });

  function getAverageColor(imageData) {
    let r = 0,
      g = 0,
      b = 0;

    for (let y = 0; y < imageData.height; y++) {
      for (let x = 0; x < imageData.width; x++) {
        const index = (y * imageData.width + x) * 4;
        r += imageData.data[index];
        g += imageData.data[index + 1];
        b += imageData.data[index + 2];
      }
    }

    const totalPixels = imageData.width * imageData.height;
    r = Math.round(r / totalPixels);
    g = Math.round(g / totalPixels);
    b = Math.round(b / totalPixels);

    return { r, g, b };
  }


</script>
<main class="h-screen ">
   <div class="flex flex-wrap items-center transition-all"> 
    
    <img
	src={'https://image.tmdb.org/t/p/original' + data.poster_path}
	alt={data.title}
    loading="lazy"
	class="skeleton relative rounded mx-4 mt-3 object-fit h-full w-[300px] transition-all"
	/>
   <div> 
    <h2>{data.title}</h2>
    <p>{data.overview}</p>
</div>
</div>
</main>