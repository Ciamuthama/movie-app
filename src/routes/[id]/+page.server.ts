import Movies from '$lib/services';

export async function load({ params }) {
	try {
		const [details, similar] = await Promise.allSettled([
			Movies.getDetail(params.id),
			Movies.getSimilar(params.id)
		]);

		const detailsData =
			details.status === 'fulfilled' && details.value.ok ? await details.value.json() : null;

		const similarData =
			similar.status === 'fulfilled' && similar.value.ok ? await similar.value.json() : null;

		return { detailsData, similarData };
	} catch (error) {
		console.error('Error fetching data:', error);
		return {
			status: 500,
			error: new Error('Internal Server Error')
		};
	}
}
