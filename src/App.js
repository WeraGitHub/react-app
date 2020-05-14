import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Hello from './hello';
// import Bye from './bye';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <Header />

      </div>
    </div>
  );
}

export default App;
