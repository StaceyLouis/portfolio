import React from 'react';
import profile from "./styles/cartoon.jpg";
import about from './styles/about.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDownload, faEnvelope, faMapMarkerAlt, faFile, faPhoneAlt , faFileCode, faAddressCard, faAddressBook,faUsers} from '@fortawesome/free-solid-svg-icons';
import './styles/about.css';
import Particles from 'particles-bg';





class About extends React.Component{


  render(){
      return(
    <section className="resume">
      
      <div id="resume" >
        <div className="cards">
          
      <div id="img-div"> <img src={about} id="about-img"/> </div>
        <img src={profile} className="img-top" id="img-top"/>
    </div>
    
      <div className="about-container ">
                <h1 id="about-title"><FontAwesomeIcon icon={faAddressCard}/> About Me</h1>
                <p id="about-description"> Hi, I'm Stacey! I'm a full stack developer
                who is passionate about learning new technologies. I would like to use my 
                knowledge to  help the community and elevate tech knowledge wherever I can  </p>
    
                <h1><FontAwesomeIcon icon={faFileCode}/> Technology</h1>
      <p id="about-p">HTML | CSS | JavaScript  Bootstrap | Responsive Design | React.js | Python | GSAP | Axios | APIs AWS | Data Structures | Deployment | Git |  MySQL| OOP  REST |Unit Testing | jQuery CanvasJS </p>
   
              
                <button className="download"><a href="https://www.canva.com/design/DAEJfSs_1t0/sIep0O4_9Uk0dHhkvrs4xw/view?utm_content=DAEJfSs_1t0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank"> <FontAwesomeIcon icon={faDownload} id="faDownload"/> View/Download Resume</a></button>
             
            </div>
            </div>

      
     <div id="particles">
       <Particles type="cobweb" bg={false} color="#ffffff"  />
     </div>
	
</section>

    )
  }
}

export default About;