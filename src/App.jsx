import { useState } from 'react'
import React from 'react';
import { Header } from './Header/index';
import { Section } from './Section';
import { Loader } from './Loader';

function App() {

  return (
    <React.Fragment>
    <Header />
    <Loader />
    <Section />
    </React.Fragment>  
  );
}

export default App
