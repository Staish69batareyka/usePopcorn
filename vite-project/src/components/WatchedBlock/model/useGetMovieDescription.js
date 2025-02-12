import { useEffect, useState } from "react"
import { getMovieDescription } from "../api"

export function useGetMovieDescription(id) {
  const [description, setDescription] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  

  
  useEffect(()=>{
    setIsLoading(true)
    getMovieDescription(id).then((data) => { 
      if (data.Response === "False") throw new Error("Can't get description")
        setDescription(data)
        setIsLoading(false)
        
  
    // async function getDescription() {    <------- То же самое, что и вверху, но не так круто
    //   const data = await getMovieDescription(id)
    //     setDescription(data)
    // }
    // getDescription()}, 
    }).catch((err) => setError(err.message)
    )
  }, [id])
    return {description, isLoading, errorMSG: error}
}