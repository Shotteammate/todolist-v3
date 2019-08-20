import React, { Component } from 'react'

export class TodoItem extends Component {
  render() {
    return (
      <div>
        <p>
          <input type="checkbox"/> {'   '}
          todo testing item 1
          <button>X</button>
        </p>
        <p>
          <input type="checkbox"/> {'   '}
          todo testing item 2
          <button>X</button>
        </p>
        <p>
          <input type="checkbox"/> {'   '}
          todo testing item 3
          <button>X</button>
        </p>
      </div>
    )
  }
}

export default TodoItem
