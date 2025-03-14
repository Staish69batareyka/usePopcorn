
import { useEffect, useState } from 'react'
import { Error } from '../../Error'
import { Spinner } from '../../Spinner'
import { StarRating } from '../UI/StarRating/StarRating'
import { useGetMovieDescription } from '../model/useGetMovieDescription'


export function Details({id}) {
    const [rating, setRating] = useState(0)
    const [ratedMovies, setRatedMovies] = useState([])

    let movieIndex = ratedMovies?.findIndex((movie) => movie.id === id)

    const{description, isLoading, errorMSG} = useGetMovieDescription(id)
  
    useEffect( ()=> {
      setRating(0
      )
    }, [id])


  if (isLoading) return <div className="spinner-wrapper"><Spinner/></div> 
  else if(errorMSG) return <Error msg={errorMSG}></Error>
  
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


            <section>
              <div className="rating">
                {movieIndex === -1 &&  
                  (
                    <StarRating rating={rating} setRating={setRating}></StarRating>             
                  )
                }
                { 
                  !!rating && movieIndex === -1  &&
                  (<button className="btn-add" onClick={()=>{setRatedMovies((oldMovies)=> [...oldMovies, {id, rating}])}}>+ Add to list</button>)
                }
                {
                  (movieIndex !== -1) && (
                    <p>
                       You rated with movie {' '}{ratedMovies[movieIndex]?.rating}{' '} <span>⭐️</span>
                    </p>
                  )
                }
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