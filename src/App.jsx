import React from "react";
import { Contact } from "./Contact";
import { Header } from "./Header/";
import { Loader } from "./Loader";
import { Intro } from "./Intro";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Contact />
      <Loader />
      <Intro />
    </React.Fragment>
  );
}

export default App;
