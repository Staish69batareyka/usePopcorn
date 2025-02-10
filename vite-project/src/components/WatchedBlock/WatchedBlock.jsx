import React from 'react'
import {Box} from '../Box/Box'
import { Details } from './Details'
import { Summary } from './Summary'
import {List} from '../List/List'
import { WatchedItem } from './WatchedItem'

export function WatchedBlock() {
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

