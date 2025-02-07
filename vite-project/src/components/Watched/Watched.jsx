import React from 'react'
import {Box} from '../Box'
import { Details } from './Details'
import { Summary } from './Summary'
import {List} from '../List'
import { WatchedItem } from './WatchedItem'

export function Watched() {
  return (
    <Box>
        <Details></Details>
        <Summary></Summary>
        <List>
            <WatchedItem></WatchedItem>
        </List>
    </Box>
    
  )
}

