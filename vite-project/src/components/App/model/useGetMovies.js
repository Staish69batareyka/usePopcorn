import React, { useEffect, useRef, useState } from "react";
import { getMovies } from "../api";

export function useGetMovies(){
    
  const [numResults, setNumResults] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()
  const [movies, setIsMovies] = useState([])
  const [activeMovie, setActiveMovie] = useState()
  const abortController = useRef(null)

  async function searchHandler(value){
    if(!value){
      setError()
      setNumResults(0)
      return
    }

    if(abortController.current){
      abortController.current.abort()
    }
    const controller = new AbortController()
    abortController.current = controller
    // isError && setIsMovies([])

    // console.log(isError);
    setIsLoading(true)
    setError()
    try{
      const data = await getMovies(value, controller)
      if (data.Response === "False") throw new Error("Can't find the movie")
      

      !data ? setError(true) : setError(false)
      setIsMovies(data.Search)
      setNumResults(data?.totalResults || 0)

    }catch(error){
      if(error.name !== AbortController){
        console.log(error)
        setIsMovies([])
        setError(error.message)
      }
      
    }
    
    setIsLoading(false)

    
  }

  useEffect(() =>{      // Используется, чтобы подчищать запросы (очистка предыдущих запросов)
    return () => {      // Есть косяк. Хорошо работает только тогда, когда быстро печатаешь
      if(abortController.current){
        abortController.current.abort()
      }  
    }
  }, [])

  return {searchHandler, numResults, isLoading, error, movies, activeMovie, setActiveMovie}
}