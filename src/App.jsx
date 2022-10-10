import React from "react";
import { Contact } from "./Contact";
import { Header } from "./Header/";
import { Loader } from "./Loader";
import { Intro } from "./Intro";
import { Certificate } from "./CertificateImg";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Contact />
      <Loader />
      <Intro />
      <Certificate />
    </React.Fragment>
  );
}

export default App;
