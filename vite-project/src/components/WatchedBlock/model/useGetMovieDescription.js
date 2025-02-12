import { useEffect, useState } from "react"
import { getMovieDescription } from "../../App/api"

export function useGetMovieDescription(id) {
  const [description, setDescription] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  

  
  useEffect(()=>{
    setIsLoading(true)
    getMovieDescription(id).then((data) => { 
        setDescription(data)
        setIsLoading(false)
  
    // async function getDescription() {    <------- То же самое, что и вверху, но не так круто
    //   const data = await getMovieDescription(id)
    //     setDescription(data)
    // }
    // getDescription()}, 
    })}, [id])
    return {description, isLoading}
}