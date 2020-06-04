import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Car from "./Car/Car";

class App extends Component {
  render() {
    const divStyle = {
      "textAlign": "center",
      "backgroundColor": "gray"
    };

    return (
      <div style={divStyle}>
        <h1>Hello world!</h1>

        <Car name={"Ford"} year={2019}>
          <p style={{ color: "yellow" }}>COLOR</p>
        </Car>
        <Car name={"BMW"} year={2015}>
          <p style={{ color: "red" }}>COLOR</p>
        </Car>
        <Car name={"Audi"} year={2011} >
          <p style={{ color: "blue" }}>COLOR</p>
        </Car>

      </div >
    );
  }
}

export default App;
