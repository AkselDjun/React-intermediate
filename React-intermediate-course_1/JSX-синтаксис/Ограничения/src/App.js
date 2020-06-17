import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>Hello world!</h1>
        </div>
        <p>Hi!</p>
      </div>
    );


    //в JSX класс задается className!

    //При выводе всегда должен быть какой-нибудь корневой элемент, по типу вот:
    // <div className="App">
    //   <h1>Hello world!</h1>
    // </div>

  }
}

export default App;
