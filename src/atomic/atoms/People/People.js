import React from 'react'

const People = ({options}) =>(
  <>
    <p>{options.name}</p>
    <p>skin color: {options.skin_color}</p>
    <p>eye color: {options.eye_color}</p>
    <p>hair color: {options.hair_color}</p>
    <p>gender: {options.gender}</p>
    <p>height: {options.height}</p>
  </>
)

export default People