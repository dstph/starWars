import React from 'react'

const Vehicles = ({options}) => (
  <>
    <p>{options.name}</p>
    <p>model: {options.model}</p>
    <p>length: {options.length}</p>
  </>
)

export default Vehicles;