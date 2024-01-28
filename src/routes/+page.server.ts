import Movies from '$lib/services';

export async function load() {
	try {
		const [upcoming, discover, trending] = await Promise.allSettled([
			Movies.getUpcoming(),
			Movies.getDiscover(),
			Movies.getTrending()
		]);

		const upcomingData =
			upcoming.status === 'fulfilled' && upcoming.value?.ok ? await upcoming.value?.json() : null;

		const discoverData =
			discover.status === 'fulfilled' && discover.value?.ok ? await discover.value?.json() : null;

		const trendingData =
		trending.status === 'fulfilled'	&& trending.value?.ok ? await trending.value?.json() : null

		console.log(trendingData);
		
		return { upcomingData, discoverData, trendingData };
	} catch (error) {
		console.error('Error fetching data:', error);
		return {
			status: 500,
			error: new Error('Internal Server Error')
		};
	}
}
