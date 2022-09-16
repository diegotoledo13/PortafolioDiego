import React from "react";
import './header.css';
import instagram from '../public/icons/instagram.png';
import linkedin from '../public/icons/linkedin.png';
import github from '../public/icons/github.png';
import gmail from '../public/icons/gmail.png';

function Header () {
    return(
        <div>
            <header className="main-header">
                <h1 className="main-header-name">Diego Toledo</h1>
                <img className="main-header-img" src="/public/images/imgDiego.png" alt="" />
                <div class="social-container">
                    <ul>
                        <a href="#"><img src={instagram} alt="Instagram" /> </a>
                        <a href="#"><img src={linkedin} alt="linkedin" /></a>
                        <a href="#"><img src={github} alt="github" /></a>
                        <a href="#"><img src={gmail} alt="gmail" /></a>
                    </ul>
                </div>
            </header>
        </div>
    );
    }
    

export { Header };