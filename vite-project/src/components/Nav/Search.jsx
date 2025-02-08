import React, { useState } from 'react'

export function Search({onSearch}) {

  const [value, setValue] = useState("")

  function changeHandler(){

    setValue(event.target.value)
    onSearch(event.target.value)

  }

  return (
    <input onChange={changeHandler} value={value} className="search" type="text" placeholder="Search movies..." />

  )
}

// export default Search