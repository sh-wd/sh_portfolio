import React from 'react';
import NavMenu from './NavMenu';

const Contact = () => {
    return ( 
        <div className="contact-container">
            <NavMenu/>
            <h1 className="animate opening-line">Let's talk</h1>
            <h2 className="contact-header">Contact</h2>
            <p>I am open to collaboration with those in need of a software solution. In particular I have a focus on front end design but I am skilled in full stack applications. If you think we could create something great together then please do get in touch.</p>
            <div className="contact-link-container">
                <img src={process.env.PUBLIC_URL + `/images/linkedin.png`} className="logo" alt="linkedin logo"/>
                <a href="https://www.linkedin.com/in/scott-hynd-46545b277/" target="_blank" rel='noreferrer'><h2 className="grow">LinkedIn</h2></a>
            </div>
            <div className="contact-link-container">
                <img src={process.env.PUBLIC_URL + `/images/email.png`} className="logo" alt="email logo"/>
                <a href="mailto:hyndscott@duck.com" target="_blank" rel='noreferrer'><h2 className="grow">Email</h2></a>
            </div>
        </div>
     );
}
 
export default Contact;