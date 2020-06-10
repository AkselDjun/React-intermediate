import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'
import About from './About/About'
import Cars from './Cars/Cars'

class App extends Component {
  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>

        <hr />

        {/*localhost:3000*/}
        <Route
          path="/"//путь роута
          exact render={() => <h1>Home Page</h1>}//рендер роута, только в случае полного совпадения адреса, который мы зарегестрировали
        />

        <About />

        <Cars />
      </div>
    );
  }
}

export default App
