import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import About from './components/about';
import Education from './components/education';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <About />
        <Education />
      </header>
      <Footer />
    </div>
  );
}

export default App;
