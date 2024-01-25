import { API_KEY } from '$env/static/private'
export async function load({fetch,params}){
const data = await fetch(`
https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}`, {
  method:'GET',
  redirect:'follow'
})
.then(response => response.json())
.then(result => result)
return data
}

