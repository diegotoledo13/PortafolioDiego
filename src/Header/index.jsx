import React from "react";
import './header.css';
import instagram from '../assets/icons/instagram.png';
import linkedin from '../assets/icons/linkedin.png';
import github from '../assets/icons/github.png';
import twitter from '../assets/icons/twitter.png';
import imgDiego from  '../assets/images/imgDiego.png';

function Header () {
    return(
        <div>
            <header className="main-header">
                <h1 className="main-header-name">Diego Toledo</h1>
                <img className="main-header-img" src={imgDiego} alt="Imagen Diego" />
                <div class="social-container">
                    <ul>
                        <a href="https://www.instagram.com/diegokill_lp/"><img src={instagram} alt="Instagram" /> </a>
                        <a href="https://www.linkedin.com/in/diego-toledo-64a356241/"><img src={linkedin} alt="linkedin" /></a>
                        <a href="https://github.com/diegokill13"><img src={github} alt="github" /></a>
                        <a href="https://twitter.com/diegokill_lp"><img src={twitter} alt="twitter" /></a>
                    </ul>
                </div>
            </header>
        </div>
    );
    }
    

export { Header };