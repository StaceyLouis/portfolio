import React from 'react';
import './styles/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram,faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope,  } from '@fortawesome/free-solid-svg-icons';


export default class Header extends React.Component{
    render(){
        return(
            <div className="cover">
            <div className="cover-sub">
            <h1 className="typewriter" id="name">Stacey Louis</h1>
            <span id="sub-name">Web Developer</span>

            <div className="icons">
<a href="https://www.facebook.com/shtaceyologie/" target="_blank">
      <FontAwesomeIcon icon={faFacebook} className="fa" id="fa-icon"/></a>
      <a href="https://www.instagram.com/staceyologie/" target="_blank">   
    <FontAwesomeIcon icon={faInstagram}id="in-icon" className="fa"/> </a>
    <a href="https://www.linkedin.com/in/stacey-louis/" target="_blank">
    <FontAwesomeIcon className="fa" icon={faLinkedin}id="li-icon"/></a>
    <a href="mailto:staceylouis@icloud.com">
        <FontAwesomeIcon className="fa" icon={faEnvelope} id="ma-icon"/>
    </a>
    <a href="https://github.com/StaceyLouis" target="_blank" id="gi-icon"><FontAwesomeIcon icon={faGithub} className="fa"/></a>
</div>

<a href="#resume">
<div class="container">
 <div class="chevron"></div>
  <div class="chevron"></div>
  <div class="chevron"></div>
  
  
</div>
</a>
            </div>
            </div>
        )
    }
}