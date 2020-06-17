import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Car from "./Car/Car";

class App extends Component {

  state = {
    cars: [
      { name: "Ford", year: "2018", color: "Black" },
      { name: "Audi", year: "2013", color: "Blue" },
      { name: "BMW", year: "2008", color: "Green" },
    ],
    pageTitle: "React components"
  };

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  handleInput = (event) => {
    this.setState({
      pageTitle: event.target.value
    })
  }

  render() {
    const divStyle = {
      "textAlign": "center",
      "backgroundColor": "gray"
    };

    const cars = this.state.cars;

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <input type="text" onChange={this.handleInput} />

        <button onClick={this.changeTitleHandler.bind(this, "Changed!")}>Change title</button>

        <Car
          name={cars[0].name}
          year={cars[0].year}
          color={cars[0].color}
          onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
        />
        <Car
          name={cars[1].name}
          year={cars[1].year}
          color={cars[1].color}
          onChangeTitle={() => this.changeTitleHandler(cars[1].name)}
        />
        <Car
          name={cars[2].name}
          year={cars[2].year}
          color={cars[2].color}
          onChangeTitle={() => this.changeTitleHandler(cars[2].name)}
        />
      </div >
    );
  }
}

export default App;
