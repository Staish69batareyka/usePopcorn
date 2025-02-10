import React, { useState } from 'react'
import {Box} from '../Box'
import {Error} from '../Error'
import {List} from '../List'
import {MovieItem} from './MovieItem'
import { Spinner } from '../Spinner'

export  function MovieBlock({isLoading, isError, movies, activeMovie, setActiveMovie}) {


  return (
    <Box>
      
      {isError && <Error></Error>}
      {isLoading && 

        <div className='spinner-wrapper'>
          <Spinner></Spinner>
        </div>
      
      }
      <List className="list-movies">
        {
          movies && movies.map((item) => (<MovieItem key={item.imdbID} movie={item} isActive={activeMovie === item.imdbID ? true : false} setActiveMovie={setActiveMovie}></MovieItem>))
        }
      </List>

    </Box>
  )
}
