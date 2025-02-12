import React from 'react'
import {Box} from '../../Box/UI/Box'
import { Details } from './Details'
import { Summary } from './Summary'
import {List} from '../../List/UI/List'
import { WatchedItem } from './WatchedItem'
import { Spinner } from '../../Spinner'

export function WatchedBlock({id}) {
  return (
    <Box>

      {
        id && <Details id={id}></Details>
      }
      {
        !id && (
          <>
            <Summary></Summary>
            <List>
              <WatchedItem></WatchedItem>
            </List>
          </>
        )
      }
      
    </Box>
    
  )
}

