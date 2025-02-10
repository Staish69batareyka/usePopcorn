import React, { useState } from 'react'

export function MovieItem({movie, isActive, movieClickHandler}) {



  return (
    <li onClick={movieClickHandler} className={isActive ? "active" : ""}>
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
