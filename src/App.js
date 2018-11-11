import React, { Component } from 'react';
import Welcome from './Welcome.js'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks: ["Tarea 1", "Tarea 2"]
    }
  }
  render() {
    const names = ["Jairo", "Andres", "Orjuela"];
    return (
      <div>
        <h1>Hola Estado</h1>
        <ul>
          {this.state.tasks.map(task =>
            <li>{task}</li>
          )}
        </ul>
        <button onClick={this.addTask.bind(this)}>Agregue un elemento</button>
        <button onClick={this.updateTask.bind(this)}>Modificar Tarea 2</button>
      </div>
    );
  }

addTask() {
  this.setState({
    tasks: this.state.tasks.concat("Nuevo elemento")
  })
}

updateTask() {
// Este es el metodo cuando no sabemos el indice
  const index = this.state.tasks.findIndex(task =>
    task === "Tarea 2"
  );

  this.setState({
    tasks: this.state.tasks.map((task, i) =>
      i === index ? "Actualizado" : task
    )
  })
}

}
export default App;
