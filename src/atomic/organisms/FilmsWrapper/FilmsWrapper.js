import React,{useEffect} from 'react'
import GlobalStore from '../../../stores/MainStore'
import {FilmCard, LoadingSpinner} from '../../atoms'
import styles from './FilmsWrapper.module.scss'
import { observer } from 'mobx-react'

const FilmsWrapper = () => {
  useEffect( () => {
    GlobalStore.fetchFilms()
    
  }, [])
  return(
    <>
      {GlobalStore.loading ? <LoadingSpinner /> :
        <div className={styles.grid}>
          {
            GlobalStore.films.map((element,index)=>(
              <FilmCard onClick={GlobalStore.showModalHandler} key={element.episode_id} element={element}  />
            ))
          }
        </div>
      }
    </>

  )
}

export default observer(FilmsWrapper)