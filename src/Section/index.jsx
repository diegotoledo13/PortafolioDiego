import React from "react";
import "./section.css";

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

        <img src="/src/assets/icons/call.png" alt="Telefono" />
      </section>
      <section>
        <p className="mail"></p>
        <img src="/src/assets/icons/gmail.png" alt="Mail" />
      </section>
      <section>
        <p className="home"></p>
        <img src="/src/assets/icons/house.png" alt="direccion" />
      </section>
      <section>
        <p className="skills"></p>
        <img src="/src/assets/icons/skills.png" alt="Habilidades" />
      </section>
    </div>
  );
}

export { Section };
