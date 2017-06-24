import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './ListComponent'

let todos = [
  {
    title: 'One',
    content: 'bananas'
  },
  {
    title: 'Two',
    content: 'cheese burger'
  },
  {
    title: 'Three',
    content: 'apples'
  }
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <List todos={todos}/>
      </div>
    );
  }
}

export default App;
