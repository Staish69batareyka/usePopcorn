import React from 'react'


function List({children, className}) {
  return (
    <ul className={`list ${className ? className : ""}`}>
      {children}   
    </ul>
  )
}

export default List