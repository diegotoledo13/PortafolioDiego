import React from "react";
import { imagesCertificate } from "../assets/certificate/certificate";
import "./Certificate.css";

function Certificate() {
  return (
    <div className="certificate-container">
      <div class="pic-ctn">
        <img src={imagesCertificate.basico} alt="" class="pic" />
        <img src={imagesCertificate.definitivoHtmlCss} alt="" class="pic" />
        <img src={imagesCertificate.diseñoGrafico} alt="" class="pic" />
        <img src={imagesCertificate.diseñoWeb} alt="" class="pic" />
        <img src={imagesCertificate.frontendDev} alt="" class="pic" />
        <img src={imagesCertificate.gitGithub} alt="" class="pic" />
        <img src={imagesCertificate.infoA} alt="" class="pic" />
        <img src={imagesCertificate.introReact} alt="" class="pic" />
        <img src={imagesCertificate.mobileFirst} alt="" class="pic" />
        <img src={imagesCertificate.practicoJs} alt="" class="pic" />
        <img src={imagesCertificate.prework} alt="" class="pic" />
        <img src={imagesCertificate.repManRed} alt="" class="pic" />
        <img src={imagesCertificate.visualBasic} alt="" class="pic" />
      </div>
    </div>
  );
}

export { Certificate };
