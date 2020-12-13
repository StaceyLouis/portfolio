import React from 'react'
import './styles/Projects.css'


export default class Projects extends React.Component{
    render(){
        return(
            <div className="projects">
                <h1 id="projects-title">Recent Projects</h1>
            <div className="projects-container">
               
                <div>
                <div className="one">
                    <div className="overlay">
                        <span className="desc-title">React To-do</span>
                        <br/>
                        <span className="desc">Made witth React and CSS</span>
                        <br/>
                        <button className="demo-button">Demo</button>
                        <button className="github-button">Github</button>
                    </div>
                </div>
                <div className="two">
                <div  className="overlay">
                        <span className="desc-title">React To-do</span>
                        <br/>
                        <span className="desc">Made witth React and CSS</span>
                        <br/>
                        <button className="demo-button">Demo</button>
                        <button className="github-button">Github</button>
                    </div>
                </div>
                </div>
                <div>
                <div className="three">
                <div  className="overlay">
                        <span className="desc-title">React To-do</span>
                        <br/>
                        <span className="desc">Made witth React and CSS</span>
                        <br/>
                        <button className="demo-button">Demo</button>
                        <button className="github-button">Github</button>
                    </div>
                </div>
                <div className="four">
                <div className="overlay" >
                        <span className="desc-title">React To-do</span>
                        <br/>
                        <span className="desc">Made witth React and CSS</span>
                        <br/>
                        <button className="demo-button">Demo</button>
                        <button className="github-button">Github</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        )
    }
}