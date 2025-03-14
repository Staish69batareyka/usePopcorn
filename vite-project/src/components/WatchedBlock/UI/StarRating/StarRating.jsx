import React, { useState } from 'react'
import { Star } from './Star'

export function StarRating({rating, setRating}) {
  const[tempRating, setTempRating] = useState(rating)

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "5px",
        }}
      >
        {Array.from({length: 10}, (_, ind) => ( 
          
          <Star key={ind} 
          ind={ind} 
          fill={ ind <= tempRating || ind < rating ? `gold` : "transparent"} 
          onHover={setTempRating}
          onMark={setRating}>
            
          </Star>))}
      </div>
      <span
        style={{
          verticalAlign: "1px",
          color: "white",
        }}
      >
        {tempRating || rating}/10
      </span>
    </div>
  )
}
