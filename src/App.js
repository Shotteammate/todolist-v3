import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';

export class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo />
        <Todos />
      </div>
    )
  }
}

export default App
