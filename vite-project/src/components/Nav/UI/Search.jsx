import React, { useState } from 'react'
import { useChangeInputValue } from '../model/useChangeInputValue'

export function Search({onSearch}) {

  const {value, changeHandler} = useChangeInputValue(onSearch)

  return (
    <input onChange={changeHandler} value={value} className="search" type="text" placeholder="Search movies..." />

  )
}

// export default Search