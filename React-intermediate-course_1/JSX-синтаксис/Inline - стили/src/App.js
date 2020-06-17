import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const divStyle = {
      "textAlign": "center",
      "backgroundColor": "gray"
    };

    return (
      <div style={divStyle}>
        <h1 style={{ color: "blue", "fontSize": "40px" }}>Hello world!</h1>
      </div>
    );
  }
}

export default App;
