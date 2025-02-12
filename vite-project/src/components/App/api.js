

export async function  getMovies(query, controller){

    const resp = await fetch(`/api?apikey=${import.meta.env.VITE_API_KEY}&s=${query}`, {signal: controller.signal})
    return await resp.json()
}


