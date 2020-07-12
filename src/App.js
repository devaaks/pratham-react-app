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

  const hideAllName = () => {
    const modifiedPerson = [ ...personState.person].map(person => {
      person.name = 'xxxxxxx';
      person.age = 'xx';
      return person;
    });
    setPersonState({ person: modifiedPerson});
  }
  
  var personComponents=[];
  for ( var i = 0; i < personState.person.length; i++){
    personComponents.push(<Person 
        name={personState.person[i].name} 
        age={personState.person[i].age} 
        key={i}
      />);
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
      <button onClick={hideAllName}>Hide Names</button>
      {personComponents}
    </div>
  );
}

export default app;


// import React, { Component } from 'react';
// import logo from './logo.svg';
// import Person from './Person/Person';
// import './App.css';

// class App extends Component {
//   state = {
//     person: [
//       { name: 'Jeff', age: 10 },
//       { name: 'John', age: 11 },
//       { name: 'Doug', age: 12 },
//     ]
//   }

//   hideAllName = () => {
//     const modifiedPerson = [ ...this.state.person].map(person => {
//       person.name = 'xxxxxxx';
//       person.age = 'xx';
//       return person;
//     });
//     this.setState(modifiedPerson);
//   }

//   render() {
//     var personComponents=[];
//     for ( var i = 0; i < this.state.person.length; i++){
//       personComponents.push(<Person 
//           name={this.state.person[i].name} 
//           age={this.state.person[i].age} 
//           key={i}
//         />);
//     }

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//         <button onClick={this.hideAllName}>Hide Names</button>
//         {personComponents}
//       </div>
//     );
//   }
// }

// export default App;
