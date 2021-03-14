import React from 'react'

const Species = ({options}) => (
  <>
    <p>{options.name}</p>
    <p>average height: {options.average_height}</p>
    <p>language: {options.language}</p>
  </>
)

export default Species;