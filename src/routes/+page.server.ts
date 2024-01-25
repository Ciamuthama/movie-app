import { API_KEY } from '$env/static/private'
export async function load({fetch}){
const data = await fetch(`
https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`, {
  method:'GET',
  redirect:'follow'
})
.then(response => response.json())
.then(result => result)
// console.log(data);

return data




}