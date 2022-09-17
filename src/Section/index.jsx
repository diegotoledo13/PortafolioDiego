import React from "react";
import "./section.css";
import images from "../assets/icons/images";

function Section() {
  return (
    <div className="main-container">
      <h2>Diego Toledo</h2>
      <h3 className="main-aboutme">
        Me considero una persona responsable, organizada y autocrítica. Me
        siento a gusto trabajando en equipo, dispuesto a aportar ideas y
        ejecutar soluciones. Disfruto de los desafíos y como autodidacta siempre
        me encuentro en un continuo proceso de aprendizaje.
      </h3>
      <section>
        <p className="phone"></p>

        <img src={images.call} alt="Phone" />
      </section>
      <section>
        <p className="mail"></p>
        <img src={images.mail} alt="Mail" />
      </section>
      <section>
        <p className="home"></p>
        <img src={images.address} alt="Address" />
      </section>
      <section>
        <p className="skills"></p>
        <img src={images.skills} alt="Skills" />
      </section>
    </div>
  );
}

export { Section };
