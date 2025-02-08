import React from 'react'

export function NumResults({numResults}) {
  return (
    <p className="num-results">
    Found <strong>{numResults}</strong> results
  </p>
  )
}

// export default NumResults