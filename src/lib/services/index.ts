import { variable } from "$lib/variables/variables";

const url = variable.url
const headers = {
	Accept: 'application/json',
	Authorization: `Bearer ${variable.api}`
};

export const Movies = {
	getDiscover: async () => {
		try {
			return await fetch(`${url}/discover/movie`, {
				headers
			});
		} catch (err) {
			return err;
		}
	},
	
	getUpcoming: async () => {
		try {
			return await fetch(`${url}/movie/upcoming`, {
				headers
			});
		} catch (err) {
			return err;
		}
	},
	getTrending: async()=>{
		try{
			return await fetch(`${url}/trending/movie/day`,{
				headers
			})
		}
		catch(err){
			return err
		}
	},
	getDetail: async (id: any) => {
		try {
			return await fetch(`${url}/movie/${id}`, {
				headers
			});
		} catch (err) {
			return err;
		}
	},
	getVideo:async (id:any) => {
		try {
			return await fetch(`${url}/movie/${id}/videos`, {
				headers
			});
		} catch (error) {
			return error
		}
	},
   	getSimilar: async (id: any) => {
		try {
			return await fetch(`${url}/movie/${id}/similar`, {
				headers
			});
		} catch (err) {
			return err;
		}
	},
	getCredits: async (id: any) => {
		try {
			return await fetch(`${url}/movie/${id}/credits`, {
				headers
			});
		} catch (err) {
			return err;
		}
	},
	getSearch: async (q: any) => {
		try {
			return await fetch(`${url}/search/movie?query=${q}&include_adult=false`, {
				headers
			});
		} catch (err) {
			return err;
		}
	},
	getProviders: async (id: any) => {
		try {
			return await fetch(`${url}/movie/${id}/watch/providers`, {
				headers
			});
		} catch (err) {
			return err;
		}
	}
};

export default Movies;