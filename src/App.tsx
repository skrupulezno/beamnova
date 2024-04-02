import React from 'react';
import './App.css';
import Planet from './Planet';

function App() {
  return (
    <div className="App">
      <Planet/>
      <div className="main">
        <header>
          <img className="logo" src="./logo.svg" alt="logo beamnova" />
          <h1>beamnova</h1>
        </header>
        
      </div>
    </div>
  );
}

export default App;
