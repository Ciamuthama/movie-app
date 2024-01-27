import { API_KEY } from '$env/static/private'
export async function load({fetch,params}){
const same = await fetch(`
https://api.themoviedb.org/3/movie/${params.id}/similar?api_key=${API_KEY}`, {
  method:'GET',
  redirect:'follow'
})

.then(response => response.json())
.then(result => result)
console.log(same)

return same

}