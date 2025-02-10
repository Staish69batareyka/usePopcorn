import React from 'react'
import { Star } from './Star'

export function StarRating() {
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
        {Array.from({length: 10}, (_, ind) => <Star key={ind}></Star>)}
      </div>
      <span
        style={{
          verticalAlign: "5px",
          color: "white",
        }}
      >
        10/10
      </span>
    </div>
  )
}
