import React from "react";
import "./header.css";

import images from "../assets/icons/images";

function Header() {
  return (
    <div>
      <header className="main-header">
        <h1 className="main-header-name">Dev in progress</h1>
        <img
          className="main-header-img"
          src={images.imgDiego}
          alt="Imagen Diego"
        />
        <div className="social-container">
          <ul>
            <a target="_blank" href="https://www.instagram.com/diegokill_lp/">
              <img src={images.instagram} alt="Instagram" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/diego-toledo-64a356241/"
            >
              <img src={images.linkedin} alt="linkedin" />
            </a>
            <a target="_blank" href="https://github.com/diegokill13">
              <img src={images.github} alt="github" />
            </a>
            <a target="_blank" href="https://twitter.com/diegokill_lp">
              <img src={images.twitter} alt="twitter" />
            </a>
          </ul>
        </div>
      </header>
    </div>
  );
}

export { Header };
