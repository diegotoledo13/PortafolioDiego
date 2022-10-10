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
      <div className="contact-container">
        <h1 className="contact-container-skills">
          Habilidades
          <img src={imagesLogo.skills} alt="skills" />
        </h1>
        <li>Front-end Developer</li>
        <li>Diseñador Gráfico</li>
        <li>Técnico en Reparación PC y Redes</li>
        <li>Idiomas Español-Nativo</li>
        <li>Inglés básico - estudiando actualmente</li>
      </div>
    </div>
  );
}

export { Intro };
