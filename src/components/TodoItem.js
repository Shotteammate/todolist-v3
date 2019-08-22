import React, { Component } from 'react'

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom:'1px #ccc solid',
      textDecoration: this.props.todo.completed? 'line-through': 'none',
      display: 'flex',
      justifyContent:'space-around',
    }
  }

  render() {
    const {id, title, completed} = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <div style={{flexGrow:1}}>
          <input 
            type="checkbox"
            checked={completed}
            onChange ={this.props.markComplete.bind(this,id)}/>
        </div>
        <div style={titleStyle}>{title}</div>
        <div style={{flexGrow:1}}>
          <button 
            className="delBtnStyle"
            onClick={this.props.deleteTodo.bind(this,id)}
          >X</button>
        </div>
      </div>
    );
  }
}

const titleStyle = {
  flexGrow:2, 
  display: 'inline-block',
  wordBreak: 'break-word',
  margin: '0 10px'
}

export default TodoItem
