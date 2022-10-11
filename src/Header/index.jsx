import React from "react";
import "./header.css";
import imagesLogo from "../assets/icons/images";

function Header() {
  return (
    <div>
      <div className="main-header">
        <h1 className="main-header-name">Diego Toledo</h1>
        <h2 className="main-header-subname">
          F r o n t e n d&nbsp;&nbsp; D e v e l o p e r&nbsp;&nbsp; R e a c t .
          J s
        </h2>
        <img
          className="main-header-img"
          src={imagesLogo.imgDiego}
          alt="Imagen Diego"
        />
        <div className="social-container">
          <ul>
            <a target="_blank" href="https://www.instagram.com/diegokill_lp/">
              <img src={imagesLogo.instagram} alt="Instagram" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/diego-toledo-64a356241/"
            >
              <img src={imagesLogo.linkedin} alt="linkedin" />
            </a>
            <a target="_blank" href="https://github.com/diegotoledo13">
              <img src={imagesLogo.github} alt="github" />
            </a>
            <a target="_blank" href="https://twitter.com/diegokill_lp">
              <img src={imagesLogo.twitter} alt="twitter" />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export { Header };
