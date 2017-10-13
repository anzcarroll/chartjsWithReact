import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-dom';
import NavBar from './components/NavBar';
import Chart from './components/Chart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Chart of Products n' stuff </h1>
          <NavBar />
        </header>
        <p className="App-intro">
          <Chart />
        </p>
      </div>
    );
  }
}

export default App;
