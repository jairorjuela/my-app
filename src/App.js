import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const names = ["Jairo", "Andres", "Orjuela"];
    return (
      <div>
        <h1>Hola Jairo</h1>
        <ul>
          {names.map(name =>
            <li>{name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
