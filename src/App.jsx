import { useState } from "react";
import React from "react";
import { Header } from "./Header/index";
import { Section } from "./Section";
import { Loader } from "./Loader";
import { Cards } from "./Cards/index";
import { imagesCertificate } from "./assets/certificate/certificate";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Loader />
      <Section />
      <div className="main-cards">
        <Cards
          title="Curso Básico JavaScrip"
          images={imagesCertificate.basico}
          body="Expedición: 25 jul. 2022"
        />
        <Cards
          title="Curso Definitivo de HTML y Css"
          images={imagesCertificate.definitivoHtmlCss}
          body="Expedición: 6 julio. 2022"
        />
        <Cards
          title="Curso Frontend Developer"
          images={imagesCertificate.frontendDev}
          body="Expedición: 31 julio. 2022"
        />
        <Cards
          title="Curso Profecional de GIT y GITH UB"
          images={imagesCertificate.gitGithub}
          body="Expedición: 14 mayo. 2022"
        />
        <Cards
          title="Curso Práctico de JavaScript"
          images={imagesCertificate.practicoJs}
          body="Expedición: 18 Septiembre. 2022"
        />
        <Cards
          title="Curso Maquetación Movile First"
          images={imagesCertificate.mobileFirst}
          body="Expedición: 21 julio. 2022"
        />
        <Cards
          title="Curso Prework"
          images={imagesCertificate.prework}
          body="Expedición: 10 mayo. 2022"
        />
        <Cards
          title="Curso Diseño Gráfico"
          images={imagesCertificate.diseñoGrafico}
          body="Expedición: 17 diciembre. 2001"
        />
        <Cards
          title="Curso Diseño Web"
          images={imagesCertificate.diseñoWeb}
          body="Expedición: 22 diciembre. 2006"
        />
        <Cards
          title="Curso Programador Visual Basic"
          images={imagesCertificate.diseñoGrafico}
          body="Expedición: 22 diciembre. 2006"
        />
        <Cards
          title="Curso Reparador de PC"
          images={imagesCertificate.repManRed}
          body="Expedición: 05 abril. 2005"
        />
        <Cards
          title="Curso Informatica para adolecentes"
          images={imagesCertificate.infoA}
          body="Expedición: 20 diciembre. 2000"
        />
      </div>
    </React.Fragment>
  );
}

export default App;
