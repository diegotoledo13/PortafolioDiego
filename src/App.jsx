import React from "react";
import { Contact } from "./Contact";
import { Header } from "./Header/";
import { Intro } from "./Intro";
import { Certificate } from "./CertificateImg";
import "./App.css";
import { Footer } from "./Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Contact />
      <Intro />
      <Certificate />
      <Footer />
    </React.Fragment>
  );
}

export default App;
