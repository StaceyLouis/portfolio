import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';

import resume from './styles/StaceyL.png'
import './styles/accordion.css'

function Accord(){
    return(
        <div>
    <Accordion atomic={true} id="accordion">

      <AccordionItem title="Open Resume" id="title">
          <div id="img-div">
      <img src={resume} id="resume-img" />

      </div>
      </AccordionItem>
 

    </Accordion>
  </div>
    )
}

export default Accord