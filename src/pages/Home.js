import React, { Component } from 'react';
import {Title} from '../components/title' // importamos el componente
import { SearchForm } from '../components/SearchForm'
import MoviesList from '../components/MoviesList'

export class Home extends Component {
    state = {
        usedSearch: false,
        results: []
    }

    // Creamos el metodo que pasamos al componente hijo
    _handleResults = (results) => {
        this.setState({ results, usedSearch: true })
    }
    
    _renderResults(){
        return this.state.results.length === 0
            ? <p>No hay resultados</p> 
            : <MoviesList movies={this.state.results}/>
    }

    render() {
        return (
            <div>
                <Title>Search movies</Title>
                    <div className="SearchForm-wrapper">
                    {/* Pasmos el onResults al componente hijo */}
                        <SearchForm onResults={this._handleResults}></SearchForm>
                    </div>
                    {/* Si el state results es === 0  */}
                    {
                        this.state.usedSearch
                        ? this._renderResults()
                        : <small>Use el formulario para buscar peliculas</small>
                    }
            </div>
        );
    }
}


