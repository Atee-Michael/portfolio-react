import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
     <h1>MY REACT PORTFOLIO</h1> 
     <Header />
     <Home />
     <About />
     <Projects />
     <Contact />
    </div>
  );
}

export default App;
