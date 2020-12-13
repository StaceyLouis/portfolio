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
            bar:'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
            title: {
                text:'#fff',
                background: '#f5cc4d'
            }

          }
        return(
            <div className="skills">
                <h1 id="skills-title">Skills</h1>
                <div id="skills-container">
                    <SkillBar skills={skills} colors={colors} height={60}/>
                    </div>

            </div>
           
        )
    }
}