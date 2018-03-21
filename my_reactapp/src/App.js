import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Navclass } from './nav.js';
import logo from './logo.svg';
import './App.css';

// import './todoapp.js';
import { TodoApp } from './todoapp.js';

class App extends Component {

  render() {

    return (

       <BrowserRouter>

        <div>
             < Route exact path='/' component={Navclass}/>
    
              < Route exact path='/task' component={TodoApp} />
            
              <Route path='/logout' component={Navclass} />

        </div>

    </BrowserRouter>

    
    );

  }
}

export default App;
