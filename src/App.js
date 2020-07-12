import React, { useState } from 'react';
import logo from './logo.svg';
import Person from './Person/Person';
import './App.css';

const app = props => {
  const [ personState, setPersonState ] = useState({
    person: [
      { name: 'Jeff', age: 10 },
      { name: 'John', age: 11 },
      { name: 'Doug', age: 12 },
    ]
  });

  const [ showState, setShowState ] = useState(true);

  const hideAllName = () => {
    const modifiedPerson = [ ...personState.person].map(person => {
      person.name = 'xxxxxxx';
      person.age = 'xx';
      return person;
    });
    setPersonState({ person: modifiedPerson});
  }

  const toggleDisplay = () => {
    setShowState(!showState);
  }
  
  var personComponents = null;
  if ( showState ) {
    personComponents = (
      <div>
        {personState.person.map(person => {
          return <Person
            name={person.name}
            age={person.age}
            key={person.name}
          />
        })}
      </div>
    );
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
      <button onClick={hideAllName}>Hide Data</button>
      <button onClick={toggleDisplay}>Hide Banner</button>

    
      {showState ? personComponents : null}
    </div>
  );
}

export default app;