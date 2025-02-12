import React from 'react'

export function Error({msg}) {
  return (
    <p className="error">
        <span>⛔️</span> {msg}
    </p>
  )
}
