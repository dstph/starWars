import React from 'react'
import styles from './FilmCard.module.scss'

const FilmCard = ({onClick, element}) => {
  const {title, release_date} = element
  return(
    <div onClick={()=>onClick(element)} className={styles.film_card}>
      <h4>{title}</h4>
      <h4>{release_date}</h4>
    </div>
  )
}

export default FilmCard