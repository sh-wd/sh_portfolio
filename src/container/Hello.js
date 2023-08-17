import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Hello.css";

const Hello = () => {

    const [isActive, setActive] = useState(false);

    const handleClick = () => {
        setActive(!isActive);
    };
    
    return ( 
        <div className="hello-container" onClick={handleClick}>
            <ul>
                <li className={`hello-link ${isActive ? "hide": "show animate"}`}>Hi.</li>
                <li>
                    <Link to="/about" className={`hello-link ${isActive ? "show animate inline-block grow": "hide"}`}>About</Link>
                </li>
                <li className={`${isActive ? "hide": "show delay04 animate"}`}>I am</li>
                <li>
                    <Link to="/study_work" className={`${isActive ? "show delay04 animate inline-block grow": "hide"}`}>Study+Work</Link>
                </li>
                <li className={`${isActive ? "hide": "show delay08 animate"}`}>Scott</li>
                <li>
                    <Link to="/contact" className={`${isActive ? "show delay08 animate inline-block grow": "hide"}`}>Contact</Link>
                </li>
            </ul>
            <div className="bg-image"></div>
            <div className="tap-indication">Tap Anywhere</div>
        </div>
     );
}
 
export default Hello;