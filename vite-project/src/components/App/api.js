const API_KEY = '4fdf57d3'



// export async function  getMovies(query){

//     try {
    
//         const resp = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
    
//         if (!resp.ok) throw new Error("Request error")

//         const data = await resp.json()

//         if (data.Response === "False") throw new Error("Can't finde some movies");
        
//         return data
        
        
        
//     } catch (error) {
//             alert(error)
//     }
    
// }


export async function  getMovies(query, controller, setIsLoading, setIsError){

    try {

        setIsLoading(true)
        setIsError(false)
    
        const resp = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`, {signal: controller.signal})
    
        if (!resp.ok) throw new Error("Request error")

        const data = await resp.json()

        setIsLoading(false)

        if (data.Response === "False") throw new Error("Can't finde some movies");
        
        return data
        
    } catch (error) {
        
        if(error.name === "AbortError"){
            console.log('предыдущий запрос отменён')
        } else{
            setIsError(true)
        }
    
    }
}