import React from "react";
import "./style.css";
import "./contact.scss";
import "./contact.css";
import imagesLogo from "../assets/icons/images";

function Contact() {
  return (
    <div className="contact-main">
      <div className="contact-container">
        <h1>
          Habilidades
          <img src={imagesLogo.skills} alt="skils" />
          <li>Front-end Developer</li>
          <li>Diseñador Gráfico</li>
          <li>Técnico en Reparación PC y Redes</li>
        </h1>
      </div>
      <div class="slider">
        <div class="slide-track">
          <div class="slide">
            <img src={imagesLogo.reactLogo} height="80" width="80" alt="" />
          </div>
          <div class="slide">
            <img src={imagesLogo.github} height="80" width="80" alt="" />
          </div>
          <div class="slide">
            <img src={imagesLogo.photoshop} height="80" width="80" alt="" />
          </div>
          <div class="slide">
            <img src={imagesLogo.htmlIcon} height="80" width="80" alt="" />
          </div>
          <div class="slide">
            <img src={imagesLogo.cssIcon} height="80" width="80" alt="" />
          </div>
          <div class="slide">
            <img
              src={imagesLogo.javaScriptIcon}
              height="80"
              width="80"
              alt=""
            />
          </div>
          <div class="slide">
            <img src={imagesLogo.sassIcon} height="80" width="80" alt="" />
          </div>
          <div class="slide">
            <img src={imagesLogo.postMan} height="80" width="80" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export { Contact };
