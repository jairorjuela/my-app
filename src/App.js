import React, { Component } from 'react';
import Welcome from './Welcome.js'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      title: "Hola mundo desde estado"
    }
  }
  render() {
    const names = ["Jairo", "Andres", "Orjuela"]
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.changeTitle.bind(this)}>Cambie el titulo</button>
      </div>
    );
  }

changeTitle() {
  this.setState({
    title: "Nuevo Titulo"
  })
}

}
export default App;
