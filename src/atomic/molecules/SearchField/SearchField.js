import React from 'react'
import styles from './SearchField.module.scss'
import {Button, People, Starships, Vehicles, Species, Planets} from '../../atoms'
import GlobalStore from '../../../stores/MainStore'
import { observer } from 'mobx-react'

const SearchField = () => (
  <div className={styles.search_field}>
    <div onChange={(e)=>GlobalStore.setSearchChoice(e.target.value)}>
      <input type="radio" id="searchChoice1"
      name="search" value="people" />
      <label for="searchChoice1">People</label>
      <input type="radio" id="searchChoice2"
      name="search" value="starships" />
      <label for="searchChoice2">Starships</label>
      <input type="radio" id="searchChoice3"
      name="search" value="vehicles" />
      <label for="searchChoice3">Vehicles</label>
      <input type="radio" id="searchChoice4"
      name="search" value="species" />
      <label for="searchChoice4">Species</label>
      <input type="radio" id="searchChoice5"
      name="search" value="planets" />
      <label for="searchChoice5">Planets</label>
    </div>
    <input onChange={(e)=>GlobalStore.setSearchInput(e.currentTarget.value)} type="text" size="40" />
    <Button onClick={GlobalStore.search} child={GlobalStore.language === 'en' ? 'Search' : 'Uughghhhgh uughghhhgh'} />
    {
      GlobalStore.dataFromSearch &&
      GlobalStore.searchChoice === 'people' ?
      <div className={styles.option}><People options={GlobalStore.dataFromSearch} /></div>
      : GlobalStore.searchChoice === 'starships' ?
      (GlobalStore.dataFromSearch && <div className={styles.option}><Starships options={GlobalStore.dataFromSearch} /></div>)
      : GlobalStore.searchChoice === 'vehicles' ?
      (GlobalStore.dataFromSearch && <div className={styles.option}><Vehicles options={GlobalStore.dataFromSearch} /></div>)
      : GlobalStore.searchChoice === 'species' ?
      (GlobalStore.dataFromSearch && <div className={styles.option}><Species options={GlobalStore.dataFromSearch} /></div>)
      :  GlobalStore.searchChoice === 'planets' ?
      (GlobalStore.dataFromSearch && <div className={styles.option}><Planets options={GlobalStore.dataFromSearch} /></div>)
      : ''
    }
  </div>
)

export default observer(SearchField)