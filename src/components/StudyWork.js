import React from 'react';
import "./components.css"
import NavMenu from './NavMenu';

const StudyWork = () => {
    return ( 
        <div className="study-work-container">
            <NavMenu/>
            <h1 className="animate opening-line">Projects</h1>
            <p>Here is work that I have completed for a client as well as projects that I did as a student.</p>
            <ul>
                <li>
                    <a href="https://mousaalnana.com/" target="_blank" rel='noreferrer'><h2 className="inline-block grow">MousaAlnana.com</h2></a>
                    <p>a website gallery to display artwork</p>
                    <p>html | css</p>
                    <p>solo</p>
                </li>
                <li>
                    <a href="https://github.com/sh-wd/codeclan_work/tree/main/project" target="_blank" rel='noreferrer'><h2 className="inline-block grow">Gonzo</h2></a>
                    <p>a money tracking web application</p>
                    <p>pyhton | html | css | sql</p>
                    <p>solo</p>
                </li>
                <li>
                    <a href="https://github.com/GregorRoss/ELGA" target="_blank" rel='noreferrer'><h2 className="inline-block grow">ELGA</h2></a>
                    <p>a language learning web application</p>
                    <p>javascript | react | jsx | css</p>
                    <p>group</p>
                </li>
                <li>
                    <a href="https://github.com/Procyonax/PawPal" target="_blank" rel='noreferrer'><h2 className="inline-block grow">PawPal</h2></a>
                    <p>a dog breed finding web application</p>
                    <p>javascript | react | jsx | css | java | spring</p>
                    <p>group</p>
                </li>
            </ul>
        </div>
    );
}
 
export default StudyWork;