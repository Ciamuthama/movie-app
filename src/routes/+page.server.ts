import Movies from '$lib/services';

export async function load() {
    try {
        const [upcoming, discover] = await Promise.allSettled([
            Movies.getUpcoming(),
            Movies.getDiscover()
        ]);

        const upcomingData = (upcoming.status === 'fulfilled' && upcoming.value.ok)
            ? await upcoming.value.json()
            : null;

        
            
        const discoverData = (discover.status === 'fulfilled' && discover.value.ok)
            ? await discover.value.json()
            : null;

        console.log(discoverData.results)
        
    return {upcomingData, discoverData}
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            status: 500,
            error: new Error('Internal Server Error')
        };
    }
}


