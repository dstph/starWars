import React from 'react'

const Planets = ({options}) => (
  <>
    <p>{options.name}</p>
    <p>climate: {options.climate}</p>
    <p>population: {options.population}</p>
  </>
)

export default Planets;