import React, { Component } from 'react';
import mainImage from './party.jpeg';
import './App.css';
import Genossen from './Genossen';
import Framework from './Framework';
import Calculator from './Calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Genossen genossenGreeting="Hallo Genossen!" genossenSlogan="Lasst uns wieder Kommunismus aufbauen!" />
          <Calculator x={2} y={3} />
          <img src={mainImage} className="App-main-image" alt="Communism it's a party" />
          <Framework frameworkName="React" frameworkHref="https://reactjs.org" /> 
        </header>
      </div>
    );
  }
}

export default App;