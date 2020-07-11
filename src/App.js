import React, { Component } from 'react';
import logo from './logo.svg';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    person: [
      { name: 'Jeff', age: 10 },
      { name: 'John', age: 11 },
      { name: 'Doug', age: 12 },
    ]
  }
  render() {
    var personComponents=[];
    for ( var i = 0; i < this.state.person.length; i++){
      personComponents.push(<Person name={this.state.person[i].name} age={this.state.person[i].age} />);
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {personComponents}
      </div>
    );
  }
}

export default App;
