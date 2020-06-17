import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Car from "./Car/Car";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/Counter";

class App extends Component {

  constructor(props) {
    console.log("App constructor")
    super(props)

    this.state = {
      cars: [
        { name: "Ford", year: 2018 },
        { name: "Audi", year: 2013 },
        { name: "BMW", year: 2008 },
      ],
      pageTitle: "React components",
      showCars: false
    };
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]//развертка старого массива в новом
    cars[index] = car
    this.setState({ cars })
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat()//создание копии массива
    cars.splice(index, 1)

    this.setState({ cars })
  }

  render() {//формирует конченый jsx
    const divStyle = {
      "textAlign": "center",
    };

    return (
      <div style={divStyle}>
        <h1>{this.props.title}</h1>

        <Counter />
        <hr />
        <button
          style={{ marginTop: "20px" }}
          onClick={this.toggleCarsHandler}>Toggle cars</button>

        <div style={{
          width: 400,
          margin: "auto",
          paddingTop: "20px"
        }}>
          {this.state.showCars
            ? this.state.cars.map((car, index) => {
              return (
                <ErrorBoundary key={index}>
                  <Car
                    name={car.name}
                    year={car.year}
                    onDelete={this.deleteHandler.bind(this, index)}
                    onChangeName={event => this.onChangeName(event.target.value, index)}
                  />
                </ErrorBoundary>
              )
            })
            : null
          }
        </div>
      </div>
    );
  }
}

export default App;
