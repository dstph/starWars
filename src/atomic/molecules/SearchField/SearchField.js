import React from 'react'
import styles from './SearchField.module.scss'
import {Button} from '../../atoms'
import GlobalStore from '../../../stores/MainStore'
import { observer } from 'mobx-react'

const SearchField = () => (
  <div className={styles.search_field}>
    <input type="text" size="40" />
    <Button child={GlobalStore.language === 'en' ? 'Search' : 'Uughghhhgh uughghhhgh'} />
  </div>
)

export default observer(SearchField)