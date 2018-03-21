import { TodoApp } from './todoapp.js';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';


const React = require('react');

const ReactDOM = require('react-dom');


export class Navclass extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            id: 0
        }
    }
    render(){
        return(
            <div>
                <Link to="/task">Todos</Link>
            </div>
        )
    }
}