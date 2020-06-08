import React from 'react';
import Headers from './Headers';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import './App.css';
import Footer from './Footer';

function App(){
  
  return (
    <div>
      <Headers/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
