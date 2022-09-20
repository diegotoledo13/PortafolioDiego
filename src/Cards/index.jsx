import React from "react";
import "./cards.css";

function Cards({ title, images, body }) {
  return (
    <div className="card-container">
      <div className="images-container">
        <img src={images} alt="certificate" />
      </div>
      <div>
        <h2 className="name-certificate">{title}</h2>
      </div>
      <div>
        <p className="expedicion">{body} </p>
      </div>
    </div>
  );
}

export { Cards };
