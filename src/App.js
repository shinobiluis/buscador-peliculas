import React, {Component} from 'react';
import './App.css';
// import { render } from '@testing-library/react';
import 'bulma/css/bulma.css' //importamos bulma
import {Detail} from './pages/Detail'
import {Home} from './pages/Home'
import {NotFount} from './pages/NotFount'
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  // Creamos el state para renderizar resultados
  
  
  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/detail/:id' component={Detail}></Route>
          <Route component={NotFount}/>
        </Switch>
      </div>
    );
  }
}

export default App;
