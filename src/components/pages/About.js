import React, { Component } from 'react';

export class About extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 style={aboutStyle}>About</h2>
        <p style={aboutStyle}>This page is using React Router to demostrate pages visit.</p>
      </React.Fragment>
    )
  }
}

const aboutStyle = {
  background: '#f4f4f4',
  padding: '0px 5px',
}

export default About;
