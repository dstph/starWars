import React from 'react'

const Starships = ({options}) => (
  <>
    <p>{options.name}</p>
    <p>model: {options.model}</p>
    <p>Cargo capacity: {options.cargo_capacity}</p>
  </>
)

export default Starships