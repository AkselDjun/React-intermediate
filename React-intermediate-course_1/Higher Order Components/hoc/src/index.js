import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const starWarsChars = [
  { name: 'Люк Скайвокер', side: 'light' },
  { name: 'Палпатин', side: 'dark' },
  { name: 'Обиван Кеноби', side: 'light' },
  { name: 'Дарт Вэйдер', side: 'dark' }
]

const App = ({ list }) => {
  return (
    <ul>
      {list.map((char, index) => {
        return (
          <li key={char.name + index}>
            <strong>{char.name}</strong>
            <p>{char.side}</p>
            <br />
            <hr />
          </li>
        )
      })}
    </ul>
  )
}

const withFilteredProps = Component => ({ list, side }) => {
  const filteredList = list.filter(char => char.side === side)
  return <Component list={filteredList} />
}

const FilteredList = withFilteredProps(App)

ReactDOM.render(<FilteredList list={starWarsChars} side="light" />, document.getElementById('root'));
