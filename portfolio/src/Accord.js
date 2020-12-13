import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';

import resume from './styles/StaceyL.png'
import './styles/accordion.css'

function Accord(){
    return(
        <div className="accord-container">
    <Accordion atomic={true} id="accordion">

      <AccordionItem title="Open Resume" id="title">
          <div id="img-div">
     <a href="https://www.canva.com/design/DAEJfSs_1t0/sIep0O4_9Uk0dHhkvrs4xw/view?utm_content=DAEJfSs_1t0&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton" target="_blank"> <img src={resume} id="resume-img" /> </a>

      </div>
      </AccordionItem>
 

    </Accordion>
  </div>
    )
}

export default Accord