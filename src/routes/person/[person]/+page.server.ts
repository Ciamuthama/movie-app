import Person from '$lib/services/persons';

export async function load({ params }) {
	try {
		const [person, credit] = await Promise.allSettled([
			Person.getDetail(params.person),
			Person.getCredits(params.person)
		]);

		const personData =
			person.status === 'fulfilled' && person.value?.ok ? await person.value.json() : null;
		const creditData =
			credit.status === 'fulfilled' && credit.value?.ok ? await credit.value.json() : null;
        console.log(personData)
        
    return {personData,creditData}
	} catch (error) {
		console.error('Error fetching data:', error);
		return {
			status: 500,
			error: new Error('Internal Server Error')
		};
	}
}
