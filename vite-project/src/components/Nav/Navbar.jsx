import React from 'react'
import {Search} from './Search'
import {NumResults} from './NumResults'

export function Navbar() {
  return (
    <nav className="nav-bar">
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
    <Search></Search>
   <NumResults></NumResults>
  </nav>
  )
}

// export default Navbar