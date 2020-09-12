import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/main.scss';
import Navbar from './components/navbar';
import Footer from './components/footer';
import About from './components/about';
import Education from './components/education';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <About />
        <Education />
      </header>
      <Footer />
    </div>
  );
}

export default App;
