import { observable, makeObservable, action, computed } from 'mobx';
import { arrSort, regularArrSort, fetchAll } from './functions';

class MainStore {
  language = 'en';
  films = '';
  loading = true;
  choosenLang = 'Language:';
  languages = [
    { code: 'en', name: 'English'},
    { code: 'woo', name: 'Wookiee'},
  ];
  translation = {
    'en': 'Language:',
    'woo': 'Raaaaaahhgh uuh:',
  };
  showModal = false;
  modalFilm = '';
  modalCharecters = '';
  modalStarships = '';
  modalPlanets = '';
  modalVehicles = '';
  modalSpecies = '';

  constructor() {
    makeObservable(this, {
      language: observable,
      setLanguage: action,
      loading: observable,
      setLoading: action,
      choosenLang: observable,
      setChoosenLang: action,
      films: observable,
      setFilms: action,
      fetchFilms: action,
      showModal: observable,
      setShowModal: action,
      modalFilm: observable,
      setModalFilm: action,
      modalCharecters: observable,
      setModalCharecters: action,
      modalStarships: observable,
      setModalStarships: action,
      modalPlanets: observable,
      setModalPlanets: action,
      modalVehicles: observable,
      setModalVehicles: action,
      modalSpecies: observable,
      setModalSpecies: action,
    })
  }
  setModalSpecies(value){
    this.modalVehicles = value
  }
  setModalVehicles(value){
    this.modalVehicles = value
  }
  setModalPlanets(value){
    this.modalPlanets = value
  }
  setModalStarships(value){
    this.modalStarships = value
  }
  setModalCharecters(value){
    this.modalCharecters = value
  }

  setModalFilm(value){
    this.modalFilm = value;
  }
  setShowModal=()=>{
    this.showModal = !this.showModal;
    this.setModalCharecters('')
    this.setModalStarships('')
    this.setModalPlanets('')
    this.setModalVehicles('')
    this.setModalSpecies('')


  }
  setLoading(){
    this.loading = !this.loading;
  }
  setLanguage(e){
    this.language = e.target.value;
    this.setChoosenLang(this.translation[e.target.value]);
  }
  setChoosenLang(value){
    this.choosenLang = value;
  }
  setFilms(value){
    this.films=value;
  }
  fetchFilms(){
    fetch(`https://swapi.dev/api/films`)
		.then( response => response.json() )
		.then( data => this.setFilms( arrSort(data.results) ) )
		.catch( (error) => console.log(error) )
    .finally(()=> this.setLoading())
  }
  showModalHandler=(element)=>{
    this.setShowModal();
    this.setModalFilm(element);
    fetchAll(element.characters)
      .then(data => this.setModalCharecters(regularArrSort(data)));
    fetchAll(element.starships)
      .then(data => this.setModalStarships(regularArrSort(data)));
      fetchAll(element.planets)
      .then(data => this.setModalPlanets(regularArrSort(data)));
      fetchAll(element.vehicles)
      .then(data => this.setModalVehicles(regularArrSort(data)));
      fetchAll(element.species)
      .then(data => this.setModalSpecies(regularArrSort(data)));
  }
  
}



const GlobalStore = new MainStore();

export default GlobalStore;