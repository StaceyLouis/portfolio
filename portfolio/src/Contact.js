import React from 'react';
import './styles/contact.css';
import emailjs from 'emailjs-com';


class Contact extends React.Component{


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
      <div className="comtact">
        <form>
          <h3 id="get">Get In Touch!</h3>
          <input type="text" placeholder="Name"  name="fName" className="input"/>
          <br/> 
          <input type="email" placeholder="Email"  name="email" className="input"/><br />
          <br />
          <textarea 
          name="message" placeholder="Message" className="input"></textarea>
          <br/>
          <input type="submit" value="Send" id="button"/>
    </form>

    </div>
    )
  }
}

export default Contact