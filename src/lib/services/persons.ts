import { variable } from "$lib/variables/variables";

const url = variable.url
const headers = {
	Accept: 'application/json',
	Authorization: `${variable.api}`
};


export const movies = {
	getDetail: async (id: any) => {
		try {
			return await fetch(`${url}/person/${id}`, {
				headers
			});
		} catch (err) {
			return err;
		}
	},
	getCredits: async (id: any) => {
		try {
			return await fetch(`${url}/person/${id}/movie_credits`, {
				headers
			});
		} catch (err) {
			return err;
		}
	}
};

export default movies;