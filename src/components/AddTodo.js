import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    userInput: ''
  }

  handleOnChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleOnSubmit = (e) => {
    //console.log("handle submit: " + this.state.userInput);
    //console.log("handle submit: " + e.target.value); wrong
    e.preventDefault();
    //pass userInput(state) to parent
    this.props.callbackFromParent(this.state.userInput);
    this.setState({userInput: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit} style={{display:'flex'}}>
        <input 
          type="text" 
          placeholder="Add Todo..." 
          name='userInput'
          value = {this.state.userInput}
          style={{flex:'10'}}
          onChange = {this.handleOnChange}/>
        <input 
          className = "submitBtn"
          type="submit" 
          value="Submit"
          style={{flex:'1'}}/>
      </form>
    )
  }
}

export default AddTodo
