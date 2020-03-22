import React, {Component} from 'react'

// agregamos el api key de imdb
const API_KEY = 'f7434544' 

export class SearchForm extends Component{
    // Creamos el state del formulario
    state = {
        inputMovie: ''
    }
    // Controlamos el cambo del input actualizando el state
    _handleChange = (e) => {
        this.setState({
            inputMovie: e.target.value
        })
    }
    // Controlamos el evneto submit del formulario
    _handleSubmit = (e) => {
        // Creamos el fecht
        e.preventDefault()
        const { inputMovie } = this.state
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
        .then(res => res.json())
        .then(results => {
            // console.log(results)
            const { Search = [], totalResults = 0 } = results
            console.log(Search)
            // Le pasamos el search al onResults que proviene del padre
            this.props.onResults(Search)
        })
    }
    render(){
        return(
            // Creamos el onSubmit
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input 
                            className="input" 
                            // creamos el onChange
                            onChange={this._handleChange}
                            type="text" 
                            placeholder="Movies" />
                    </div>
                    <div className="control">
                        <button className="button is-info">Search</button>
                    </div>
                </div>
            </form>
        )
    }
}