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
      <div className="main-contact">
        <section>
          <p className="phone">+59899818265</p>

          <img src={images.call} alt="Phone" />
        </section>
        <section className="mail">
          <p>diegomasteruno13@gmail.com</p>
          <img src={images.mail} alt="Mail" />
        </section>
        <section className="home">
          <p>Maldonado - Uruguay</p>
          <img src={images.address} alt="Address" />
        </section>
        <section className="skills">
          <li>Front-end Developer</li>
          <li>Diseñador Gráfico</li>
          <li>
            Técnico en Reparación y <br></br> Mantenimiento de PC y Redes
          </li>
          <img src={images.skills} alt="Skills" />
        </section>
      </div>
    </div>
  );
}

export { Section };
