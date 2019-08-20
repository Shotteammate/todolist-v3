import React, { Component } from 'react';
import {Link} from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <header className='headerStyle'>
        <h1>Todo List</h1>
        <Link className='linkStyle' to="/">Home</Link> | <Link className='linkStyle' to="/about">About</Link> 
      </header>
    )
  }
}

export default Header;
