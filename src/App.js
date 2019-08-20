import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';

export class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "todo testing item 1",
        completed: false,
      },
      {
        id: 2,
        title: "todo testing item 2",
        completed: true,
      },
      {
        id: 3,
        title: "todo testing item 3",
        completed: false,
      }
    ]
  }

  //toggle todo completed
  markComplete = () => {
    console.log("click");
  }


  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo />
        <Todos 
          todos={this.state.todos} 
          markComplete={this.markComplete}/>
      </div>
    )
  }
}

export default App;
