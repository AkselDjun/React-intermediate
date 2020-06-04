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

        <Car name={"Ford"} year={2019} />
        <Car name={"BMW"} year={2015} />
        <Car name={"Audi"} year={2011} />

      </div>
    );
  }
}

export default App;
