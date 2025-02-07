import React from 'react'


export function List({children, className}) {
  return (
    <ul className={`list ${className ? className : ""}`}>
      {children}   
    </ul>
  )
}
