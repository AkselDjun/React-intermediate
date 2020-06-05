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
    pageTitle: "React components",
    showCars: false
  };

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  changeTitleHandler = pageTitle => {
    this.setState({ pageTitle })
  }

  render() {
    const divStyle = {
      "textAlign": "center",
      "backgroundColor": "gray"
    };

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.toggleCarsHandler}>Toggle cars</button>

        {this.state.showCars
          ? this.state.cars.map((car, index) => {
            return (
              <Car
                key={index}
                name={car.name}
                year={car.year}
                color={car.color}
                onChangeTitle={() => this.changeTitleHandler(car.name)}
              />
            )
          })
          : null
        }
      </div >
    );
  }
}

export default App;
