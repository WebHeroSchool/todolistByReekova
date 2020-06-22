import React from 'react';
import logo from './logo.svg';
import './App.css';

const name = 'Maria Reekova';
const weather = true;
const activity = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>{name}</div>
        <div> Age {30} </div>
        <div> Sum {10 + 5} </div>
        <p>
          {undefined}
          {null}
          {false}
          {true}
        </p>
        <p style={{
          color: 'yellow',
          fontSize: 50,
          fontWeight: 700
        }}>
        Hello! Let's make together a new app! :) Let's go!
        </p>
        <p style={{
          color: 'yellow',}}>
          {weather && 'Weather is sunny today'}
          <div>
          {activity ? "Let's go to swim" : "Let's stay at home"}
          </div>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
