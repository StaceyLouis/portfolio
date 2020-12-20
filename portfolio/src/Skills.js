import React from 'react'
import SkillBar from 'react-skillbars';
import './styles/skills.css'



export default class Skills extends React.Component{
        
    render(){
        const skills = [
            {type: "HTML", level: 95},
            {type: "CSS", level: 98},
            {type: 'React.js', level:90},
            {type: "JavaScript", level: 85},
            {type: "Java", level: 75},
            {type: 'Python', level:70}
          ];
         const colors = {
            bar:'linear-gradient(120deg, #2e86ec  0%, #8050f0 64%)',
            title: {
                text:'#fff',
                background: '#2e86ec'
            }

          }

        return(
            <div className="skills">
              
                <div id="skills-container">
                    <SkillBar skills={skills} colors={colors} height={60}/>
                   
                    </div>
                   
            </div>
           
        )
    }
}