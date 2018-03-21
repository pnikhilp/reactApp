

import React, { Component } from 'react';
import { Title } from './title.js';
import { TodoForm } from './todoform.js';
import { TodoList } from './todolist.js';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

const axios = require('axios');

// import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

export class TodoApp extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            id: 0
        }
    }

    componentDidMount() {    

        let that =this;  
        
        let todo;

        axios.get('http://localhost:8000/api/viewlist')

            .then(function (response) {
      
                response.data.forEach(item=>{

                   todo = {id:item._id ,text:item.task}
                   that.state.data.push(todo);
                   that.setState({ data: that.state.data })

                })

            })
            .catch(function (error) {
                console.log(error);
            })

    }
  
    addTodo(text) {     //Add Todo

        let todo = { text: text, id: this.state.id++ }
        this.state.data.push(todo);
        this.setState({ data: this.state.data })

        let tid = todo.id;

        axios({
            method: 'post',
            url: 'http://localhost:8000/api/viewlist/',
            data: {
              task: todo.text
            }
          });

          console.log(todo.text)

    }

    delTodo(tid) {      //Delete Todo

        axios.delete('http://localhost:8000/api/viewlist/'+tid,{data:{_id:tid}})
        .then(function(res){

             console.log('deleted')

        })

        let remaining = this.state.data.filter(item => {

            if (item.id != tid) return item;

        })

        this.setState({ data: remaining })
    }

    saveTodo(tid,text){  //Update Todo
 
        axios({
            method: 'put',
            url: 'http://localhost:8000/api/viewlist/'+tid,
            data: {task:text}
          });
        
    }

    componentDidCatch(){
        console.log('err')
    }

    render() {

        //  console.log(this.state.data)

        return (
            <div>
              <BrowserRouter>
              <Link to='/logout'>Logout</Link>
              </BrowserRouter>
                <Title />              
                <TodoForm addTodo={this.addTodo.bind(this)} />
                <TodoList data={this.state.data} delTodo={this.delTodo.bind(this)} saveTodo={this.saveTodo.bind(this)}/>

            </div>
        )
    }
}