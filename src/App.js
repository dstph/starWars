import './App.css';
import {LanguageSwitcher, SearchField} from './atomic/molecules/'
import {FilmsWrapper, Modal} from './atomic/organisms'
import GlobalStore from './stores/MainStore'
import { observer } from 'mobx-react'

function App() {
  return (
    <div className="App">
      <LanguageSwitcher />
      <FilmsWrapper />
      <SearchField />
      {GlobalStore.showModal && <Modal />}
    </div>
  );
}

export default observer(App);
