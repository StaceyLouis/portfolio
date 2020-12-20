import React from 'react';

import Header from './Header';
import About from './About';
import Footer from './Footer';
import Skills from './Skills'
import Projects from './Projects'





import './styles/app.css';
import Envelope from './Envellope';




function App() {
  return (
    <div >
    <Header />
    <About />
    
    <h1 id="skills-title">Skills</h1>
    <Skills/>
   
   <Projects/>
   <h1 id="skills-title"> Get in Touch </h1>
    <Envelope />
  
<Footer/>

    </div>
  );
}

export default App;