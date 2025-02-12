import React, { useEffect, useRef, useState } from "react";
import { getMovies } from "../../api";

export function useGetMovies(){
    
  const [numResults, setNumResults] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [movies, setIsMovies] = useState([])
  const [activeMovie, setActiveMovie] = useState()
  const abortController = useRef(null)

  async function searchHandler(value){
    if(!value){
      setIsError(false)
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
    setIsError(false)

    const data = await getMovies(value, controller)

    setIsLoading(false)

    !data ? setIsError(true) : setIsError(false)
    data?.Search ? setIsMovies(data.Search) : setIsMovies([])
    setNumResults(data?.totalResults || 0)
  }

  useEffect(() =>{      // Используется, чтобы подчищать запросы (очистка предыдущих запросов)
    return () => {      // Есть косяк. Хорошо работает только тогда, когда быстро печатаешь
      if(abortController.current){
        abortController.current.abort()
      }  
    }
  }, [])

  return {searchHandler, numResults, isLoading, isError, movies, activeMovie, setActiveMovie}
}