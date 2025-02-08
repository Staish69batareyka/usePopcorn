import React from 'react'
import {Box} from '../Box'
import {Error} from '../Error'
import {List} from '../List'
import {MovieItem} from './MovieItem'
import { Spinner } from '../Spinner'

export  function Movie({isLoading, isError}) {
  return (
    <Box>
      
      {isError && <Error></Error>}
      {isLoading && 

      <div className='spinner-wrapper'>
        <Spinner></Spinner>
      </div>
      
      }
      <List className="list-movies">
        <MovieItem></MovieItem>
      </List>
    </Box>
  )
}
