import React from 'react';
import "./components.css"
import NavMenu from './NavMenu';

const About = () => {
    return ( 
        <div className="about-container">
            <NavMenu/>
            <h1 className="animate opening-line">I am a junior software developer</h1>
            <img src={process.env.PUBLIC_URL + `/images/scott_sunshine.jpg`} alt="close up portrait of author's face in green lighting"/>
            <p>Hello. I'm Scott. I am an avid new software developer. I recently graduated from studying a software development course at CodeClan based in Glasgow, Scotland.</p>
            <p>My background is in hospitality where I've worked for 18 years. I have worked in various venues ranging from pubs to fine dining restaurants in several countries across the world. I am a keen traveller having exhausted the working holiday visas available to me in my 20s. My highlights from my travels so far would be Kyoto, Melbourne and Berlin.</p>
            <p>My interests outside of learning to code include gaming on my Nintendo Switch, RuPaul's Drag Race and dancing to techno music.</p>
        </div>
     );
}
 
export default About;