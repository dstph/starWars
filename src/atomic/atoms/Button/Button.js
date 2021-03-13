import React from 'react'

const Button = ({onClick, child}) => (
  <button onClick={onClick}>{child}</button>
)

export default Button;