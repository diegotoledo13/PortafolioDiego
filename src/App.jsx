import React from "react";
import { Header } from "./Header/";
import { Loader } from "./Loader";
import { Intro } from "./Menu";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Loader />
      <Intro />
    </React.Fragment>
  );
}

export default App;
