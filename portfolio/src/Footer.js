import React from 'react';
import './styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'



export default class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className="socials">
                    <FontAwesomeIcon className="icon" icon={faFacebook}/>
                    <FontAwesomeIcon className="icon"  icon={faInstagram}/>
                    <FontAwesomeIcon className="icon" icon={faLinkedin}/>
                </div>
              
                <p id="copy">Copyright 2020</p>
            </div>
        )
    }
}