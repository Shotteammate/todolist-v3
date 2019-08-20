import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import uuid from 'uuid';
import DelAllAndSelectAll from './components/DelAllAndSelectAll';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';

export class App extends Component {
  constructor(props){
    super(props);
    this.handleSelectAll = this.handleSelectAll.bind(this);
    this.btnToggleFlag = "selectAll";
    this.selectAllBtnValue = "Select All";
  }

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "todo testing item 1",
        completed: false,
      },
      {
        id: uuid.v4(),
        title: "todo testing item 2",
        completed: true,
      },
      {
        id: uuid.v4(),
        title: "todo testing item 3",
        completed: false,
      }
    ]
  }

  //toggle todo completed
  markComplete = (id) => {
    //console.log("checkbox clicked id: " + id);
    this.setState({todos: this.state.todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      // map will return an attay to todos
      return todo;
    })});
  }

  // delete todo item
  deleteTodo = (id) => {
    //console.log("delete clicked id: " + id);
    this.setState({todos: this.state.todos.filter((todo) => todo.id !== id)});
  }

  //callback user input(title) from AddTodo component
  //Add todo
  AddTodoCallback = (title) => {
    //console.log("AddTodo title: " + title);
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }

  // Select all btn
  handleSelectAll = () => {
    // console.log(this.btnToggleFlag);
     if(this.btnToggleFlag === "selectAll"){
       this.setState({todos: this.state.todos.map((todo) => {
         if(todo.completed !== true){
           todo.completed = true;
         }
         return todo;
       })});
 
       this.btnToggleFlag= "unselectAll";
       this.selectAllBtnValue = "Unselect All";
     } else if(this.btnToggleFlag === "unselectAll") {
       this.setState({todos: this.state.todos.map((todo) => {
         if(todo.completed !== false){
           todo.completed = false;
         }
         return todo;
       })});
 
       this.btnToggleFlag= "selectAll";
       this.selectAllBtnValue = "Select All";
     }
   }
 
   // Delete all btn
   handleDeleteAll = () => {
     //console.log("delete all is clicked 2222"); 
     this.setState({todos: this.state.todos.filter((todo) => (todo.completed !== true))});
   }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            
              <Route exact path='/' render={props => (
                <React.Fragment>
                  <AddTodo callbackFromParent={this.AddTodoCallback}/>
                  <DelAllAndSelectAll 
                    todos={this.state.todos} 
                    handleSelectAll={this.handleSelectAll} 
                    handleDeleteAll={this.handleDeleteAll}
                    selectAllBtnValue={this.selectAllBtnValue}/>
                  <Todos 
                    todos={this.state.todos} 
                    markComplete={this.markComplete}
                    deleteTodo={this.deleteTodo} />
                </React.Fragment>
              )} />
              <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
