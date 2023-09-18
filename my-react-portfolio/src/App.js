import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Button } from 'antd';


function App() {
  const [selectedComponent, setSelectedComponent] = useState('Home') // sets the default component
  return (
    <div className="App">
     <h1>MY REACT PORTFOLIO</h1> 
     <Button type="primary">View my work</Button>
     <Header setSelectedComponent={setSelectedComponent}/>
     <main>
      {selectedComponent === 'Home' && <Home />}
      {selectedComponent === 'About' && <About />}
      {selectedComponent === 'Projects' && <Projects />}
      {selectedComponent === 'Contact' && <Contact />}
      
     </main>
    </div>
  );
}

export default App;
