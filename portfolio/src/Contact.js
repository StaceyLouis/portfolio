import React from 'react';
import './styles/contact.css';


class Contact extends React.Component{
constructor(props){
super(props);

this.state={
    userInput:''
}
this.handleChange = this.handleChange.bind(this);
}
handleChange(e) {
  this.setState({
    userInput: e.target.value
  });
}
render(){

  return(
<div>
<section className="contact">


<form>
<h3 id="get">Get In Touch!</h3>
          <input type="text" placeholder="Name" /> 
          <input type="email" placeholder="Email" /><br />
          <br />
          <textarea  onChange={this.handleChange}
          value={this.state.userInput} placeholder="Questions/Comments"></textarea>
          
          <button id="button">Danger</button>
          </form>
         
  </section>
  </div>
  )
  
 
}

}

export default Contact;


 