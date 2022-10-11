import React from "react";
import "./footer.css";
import imagesLogo from "../assets/icons/images";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-addess">
        <h4>Contacto</h4>
        <li>
          <img src={imagesLogo.mail}></img> diego.toledo.sanchez13@gmail.com
        </li>
        <li>
          <img src={imagesLogo.call}></img> +5989818265
        </li>
        <li>
          <img src={imagesLogo.address}></img> Maldonado - Uruguay
        </li>
      </div>
      <div className="footer-button">
        <a href="/public/DiegoCV.pdf" download>
          <button>Descarga mi CV aquí</button>
        </a>
      </div>
    </div>
  );
}

export { Footer };
