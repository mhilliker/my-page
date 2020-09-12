import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/main.scss';
import SiteNavbar from './components/navbar';
import Footer from './components/footer';
import About from './components/about';
import Education from './components/education';

function App() {
  return (
    <div className="App">
      <SiteNavbar />
      <header className="App-header">
        <About />
        <Education />
      </header>
      <Footer />
    </div>
  );
}

export default App;
