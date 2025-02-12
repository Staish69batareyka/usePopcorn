export async function  getMovieDescription(id){

    const resp = await fetch(`/api?apikey=${import.meta.env.VITE_API_KEY}&i=${id}`)
    return await resp.json()
    
    

}