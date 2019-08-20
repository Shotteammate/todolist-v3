import React, { Component } from 'react';

export class DelAllAndSelectAll extends Component {

  render() {
    return (
      <div style={{display:'flex'}}> 
        <input 
          type="button" 
          className = "seldelBtn" 
          value={this.props.selectAllBtnValue}
          onClick={this.props.handleSelectAll}/>
        <input 
          type="button" 
          className = "seldelBtn" 
          value="Delete All"
          onClick={this.props.handleDeleteAll}/>
      </div>
    )
  }
}

export default DelAllAndSelectAll;
