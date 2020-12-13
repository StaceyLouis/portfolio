import React from 'react';
import profile from './styles/profile.jpg';
import about from './styles/about.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import './styles/about.css';


class About extends React.Component{
  render(){
      return(
    <section id="resume">
      <div> <img src={about} id="about-img"/></div>

      <div>
      <div className="about-container ">
                <h1 id="about-title">About Me</h1>
                <p id="about-description"> Caramels macaroon bonbon wafer dessert cake donut.
                     Soufflé dragée marzipan marzipan pastry candy chocolate
                      cake marzipan candy canes. Wafer lollipop tootsie roll dr
                      chupa chups tootsie roll. Sweet pudding fruitcake croissant.  </p>
           <h2 id="contact-title">Contact </h2> 
                <span>Stacey Louis</span> <br/>
                <span>Brooklyn, New York</span> <br/>
                <span>Staceylouis@icloud.com</span> <br/>
                <span>917-763-8104</span> <br/>
                <button id="download"><a href="https://www.canva.com/design/DAEJfSs_1t0/sIep0O4_9Uk0dHhkvrs4xw/view?utm_content=DAEJfSs_1t0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank"> <FontAwesomeIcon icon={faDownload} id="faDownload"/>Download Resume</a></button>
            </div>
      </div>
      
	
</section>

    )
  }
}

export default About;