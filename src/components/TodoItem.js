import React, { Component } from 'react'

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom:'1px #ccc solid',
      textDecoration: this.props.todo.completed? 'line-through': 'none'
    }
  }

  render() {
    const {id, title, completed} = this.props.todo;

    return (
      <p style={this.getStyle()}>
        <input 
          type="checkbox"
          checked={completed}
          onChange ={this.props.markComplete}/> {'   '}
        {title}
        <button className="delBtnStyle">X</button>
      </p>
    );
  }
}

export default TodoItem
