import React from 'react'
import styles from './LanguageSwitcher.module.scss'
import GlobalStore from '../../../stores/MainStore';
import { observer } from 'mobx-react';

const LanguageSwitcher = observer(() => (
  <div className={styles.language_switcher}>
    <label>{GlobalStore.choosenLang}</label>
    <select onChange={(e)=>{GlobalStore.setLanguage(e)}} id="language" name="language">
      {GlobalStore.languages.map(language => (
        <option key={language.code} value={language.code}>{language.name}</option>
      ))}
    </select>
  </div>
))

export default LanguageSwitcher;