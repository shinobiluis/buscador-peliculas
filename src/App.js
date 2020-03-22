import React, {Component} from 'react';
import './App.css';
// import { render } from '@testing-library/react';
import 'bulma/css/bulma.css' //importamos bulma
import {Title} from './components/title' // importamos el componente
import { SearchForm } from './components/SearchForm'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Title>Search movies</Title>
        <div class="SearchForm-wrapper">
          <SearchForm></SearchForm>
        </div>
      </div>
    );
  }
}

export default App;
