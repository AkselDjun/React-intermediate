import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
      </div>
    );


    //Доказательство того, что JSX это не HTML
    // return React.createElement(
    //   "div",
    //   {
    //     className: "App"
    //   },
    //   React.createElement(
    //     "h1",
    //     null,
    //     "Hello world"
    //   ),
    // )
  }
}

export default App;
