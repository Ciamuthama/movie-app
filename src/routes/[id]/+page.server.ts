import Movies from '$lib/services';

export async function load({ params }) {
	try {
		const [details, similar,credit,video] = await Promise.allSettled([
			Movies.getDetail(params.id),
			Movies.getSimilar(params.id),
			Movies.getCredits(params.id),
			Movies.getVideo(params.id),
		]);

		const detailsData =
			details.status === 'fulfilled' && details.value.ok ? await details.value.json() : null;

		const similarData =
			similar.status === 'fulfilled' && similar.value.ok ? await similar.value.json() : null;

		const creditData =
			credit.status === 'fulfilled' && credit.value.ok ? await credit.value.json() : null;

		const videoData = 
			video.status === 'fulfilled' && video.value.ok ? await video.value.json() : null;

		
		
		return { detailsData, similarData, creditData, videoData };
	} catch (error) {
		console.error('Error fetching data:', error);
		return {
			status: 500,
			error: new Error('Internal Server Error')
		};
	}
}
