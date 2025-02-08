const API_KEY = '4fdf57d3'



export async function  getMovies(query){

    try {
    
        const resp = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
    
        if (!resp.ok) throw new Error("Request error")

        const data = await resp.json()

        if (data.Response === "False") throw new Error("Can't finde some movies");
        
        return data
        
        
        
    } catch (error) {
            alert(error)
    }
    
}