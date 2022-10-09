import React from "react";
import "./Intro.css";
import imagesLogo from "../assets/icons/images";

function Intro() {
  return (
    <div className="main-container">
      <div className="main-container-block">
        <h2>
          Diego Toledo
          <img src={imagesLogo.man} alt="man" />
        </h2>
        <h3 className="main-aboutme">
          Me considero una persona responsable, organizada y autocrítica. Me
          siento a gusto trabajando en equipo, dispuesto a aportar ideas y
          ejecutar soluciones. Disfruto de los desafíos y como autodidacta
          siempre me encuentro en un continuo proceso de aprendizaje.
        </h3>
      </div>
    </div>
  );
}

export { Intro };
