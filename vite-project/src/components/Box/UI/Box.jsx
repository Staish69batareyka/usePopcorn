import React, { useState } from 'react'

export function Box({children}) {
  const [isHidden, setIsHidden] = useState(false)
  return (
    <div className="box">
        <button className="btn-toggle" onClick={() => {setIsHidden((prevstate) => {!prevstate})}}>
          {
            !isHidden ? `-` : `+`
          }
        </button>
        {
        !isHidden && <div>{children}</div>
        }
        
    </div>
  )
}
