import React, {Component} from 'react';
import './App.css';
// import { render } from '@testing-library/react';
import 'bulma/css/bulma.css' //importamos bulma
import {Title} from './components/title' // importamos el componente
import { SearchForm } from './components/SearchForm'

class App extends Component {
  // Creamos el state para renderizar resultados
  state = {
    results: []
  }
  // Creamos el metodo que pasamos al componente hijo
  _handleResults = (results) => {
    this.setState({results})
  }
  // Metodo que retorna la actualizacion de resultados
  _renderResults(){
    const { results } = this.state
    return results.map(movie => {
      return <p key={movie.imdbID}>{movie.Title}</p>
    })
  }
  render(){
    return (
      <div className="App">
        <Title>Search movies</Title>
        <div className="SearchForm-wrapper">
          {/* Pasmos el onResults al componente hijo */}
          <SearchForm onResults={this._handleResults}></SearchForm>
        </div>
        {/* Si el state results es === 0  */}
        {
          this.state.results.length === 0
          ? <p>Sin resultados.</p> 
          : this._renderResults()
        }
      </div>
    );
  }
}

export default App;
