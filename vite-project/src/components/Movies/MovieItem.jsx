import React from 'react'

export function MovieItem({movie, isActive, setActiveMovie}) {



  return (
    <li onClick={() => setActiveMovie(movie.imdbID)} className={isActive ? "active" : ""}>
      <img
        src={movie.Poster}
        alt={movie.Title}
      />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  )
}
