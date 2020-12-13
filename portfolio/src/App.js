import React from 'react';

import Header from './Header';
import Contact from './Contact';
import About from './About';
import Footer from './Footer';
import Skills from './Skills'
import Projects from './Projects'





import './styles/app.css';
import Accord from './Accord';




function App() {
  return (
    <div >
    <Header />
    <About />
    <Accord/>
        
    <Skills />
   <Projects/>
    <Contact />
    <Footer/>


    </div>
  );
}

export default App;