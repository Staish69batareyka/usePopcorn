import React, { useEffect, useState } from 'react'
import { getMovieDescription } from '../App/api'
import { Spinner } from '../Spinner'
import { StarRating } from '../StarRating/StarRating'

export function Details({id}) {
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
  
  if (isLoading) return <div className="spinner-wrapper"><Spinner/></div>
  
  return (
    <div className="details">
            <header>
              <button className="btn-back">&larr;</button>
              <img src="https://m.media-amazon.com/images/M/MV5BMDFhNzU4MTMtYzZmNS00ZDEzLTg2MjQtYmUzZDA1ZWU4OTkzXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg" />
              <div className="details-overview">
                <h2>{description?.Title}</h2>
                <p>{description?.Released} &bull; {description?.Runtime}</p>
                <p>{description?.Genre}</p>
                <p>
                  <span>⭐️</span>
                  {description?.imdb} IMDb rating
                </p>
              </div>
            </header>

            {/* <p>{avgRating}</p> */}

            <section>
              <div className="rating">
                <StarRating></StarRating>

                <button className="btn-add">+ Add to list</button>
                <p>
                  You rated with movie 7 <span>⭐️</span>
                </p>
              </div>
              <div className="details-overview">
                <p>
                  <em>{description?.Plot}</em>
                </p>
                <p>Starring actors: {description?.Actors}</p>
                <p>Directed by: {description?.Director}</p>
              </div>
            </section>
          </div>
  )
}

// export default Details