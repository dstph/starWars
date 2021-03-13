import React from 'react'
import GlobalStore from '../../../stores/MainStore'
import { observer } from 'mobx-react'
import {Button, LoadingSpinner} from '../../atoms'
import styles from './Modal.module.scss'

const Modal = () => (
  <div className={styles.modal}>
    <div className={styles.modal_content}>
      <Button onClick={GlobalStore.setShowModal} child='x' />
      <h3>{GlobalStore.modalFilm.title}</h3>
      <p>Directed by {GlobalStore.modalFilm.director}</p>
      <h4>Characters in film:</h4>
      {
        GlobalStore.modalCharecters ? 
        GlobalStore.modalCharecters.map(el=>(
          <p key={el}>{el}</p>
        )) : <LoadingSpinner />
      }
      <h4>Planets in film:</h4>
      {
        GlobalStore.modalPlanets ? 
        GlobalStore.modalPlanets.map(el=>(
          <p key={el}>{el}</p>
        )) : <LoadingSpinner />
      }
      <h4>Starships in film:</h4>
      {
        GlobalStore.modalStarships ? 
        GlobalStore.modalStarships.map(el=>(
          <p key={el}>{el}</p>
        )) : <LoadingSpinner />
      }
      <h4>Vehicles in film:</h4>
      {
        GlobalStore.modalVehicles ? 
        GlobalStore.modalVehicles.map(el=>(
          <p key={el}>{el}</p>
        )) : <LoadingSpinner />
      }
      <h4>Species in film:</h4>
      {
        GlobalStore.modalVehicles ? 
        GlobalStore.modalVehicles.map(el=>(
          <p key={el}>{el}</p>
        )) : <LoadingSpinner />
      }
    </div>
  </div>
)

export default observer(Modal)