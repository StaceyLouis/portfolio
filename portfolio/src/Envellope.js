import React from 'react'
import './styles/env.css'
import './styles/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import{faIdCardAlt, faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons'
import {faDownload, faEnvelope, faMapMarkerAlt, faFile, faPhoneAlt , faFileCode, faAddressCard, faAddressBook,faUsers} from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';

class Envelope extends React.Component{
    sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_zuox06c', 'template_epyuyi8', e.target, 'user_mHnj7mVpkGGNZ3CfF36FD')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
          alert("Thank you for getting in touch! I will reach out to you shortly")
      }


      render(){
          return(
            <div className="env">
            <div className="content">
            <form id="form" onSubmit={this.sendEmail}>
                <div id="intro">
                <FontAwesomeIcon icon={faEnvelopeOpenText} className="id-icon"/>
                <div className="contact-info">
          <h2 id="contact-title"><FontAwesomeIcon  icon={faAddressBook}/> Contact </h2> 
                <span><FontAwesomeIcon icon={faMapMarkerAlt}/> Brooklyn, New York</span> <br/>
                <span><FontAwesomeIcon icon={faEnvelope}/> Staceylouis@icloud.com</span> <br/>
                <span><FontAwesomeIcon icon={faPhoneAlt}/> 917-763-8104</span> <br/>
          </div>
                            </div>
                
                <input type="text"
                    name="fName"
                    placeholder="Name"
                    className="input-footer"
                /> <br/>
                <input type="email"
                        name="email"
                        placeholder="Email"
                        className="input-footer"
                        /> <br/>
                <textarea  className="input-footer"
                placeholder="Message"
                name="message"></textarea>
                <br/>
                <input id="submit"
                value="Send"
                type="submit"/>
            </form>
            
            </div>

        </div>
          )
      }
}


export default Envelope;