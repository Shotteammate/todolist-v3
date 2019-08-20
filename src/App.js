import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import uuid from 'uuid';

export class App extends Component {
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
    console.log("AddTodo title: " + title);
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo callbackFromParent={this.AddTodoCallback}/>
        <Todos 
          todos={this.state.todos} 
          markComplete={this.markComplete}
          deleteTodo={this.deleteTodo} />
      </div>
    )
  }
}

export default App;
