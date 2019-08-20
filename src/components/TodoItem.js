import React, { Component } from 'react'

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom:'1px #ccc solid',
      textDecoration: this.props.todo.completed? 'line-through': 'none',
    }
  }

  render() {
    const {id, title, completed} = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <input 
          type="checkbox"
          checked={completed}
          onChange ={this.props.markComplete.bind(this,id)}/>
        <span style={spanStyle} >{title}</span>
        <button 
          className="delBtnStyle"
          onClick={this.props.deleteTodo.bind(this,id)}
        >X</button>
      </div>
    );
  }
}

const spanStyle = {
  wordWrap: 'break-word',
  padding: '10px',
}

export default TodoItem
