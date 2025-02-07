import React from 'react'
import {Box} from '../Box'
import {Error} from '../Error'
import {List} from '../List'
import {MovieItem} from './MovieItem'

export  function Movie() {
  return (
    <Box>
              <Error></Error>
              <List className="list-movies">
                <MovieItem></MovieItem>
              </List>
            </Box>
  )
}
