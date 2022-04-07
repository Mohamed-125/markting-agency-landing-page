import React, { useState } from "react";
import Navbar from "./components/Nav/Navbar";
import Section from "./components/Sections/Section";
import data from "./components/Sections/data";
import Pricing from "./components/Pricing/Pricing";
import Footer from "./components/Footer/Footer";


const App = () => {

  return (
    <div >
      <Navbar />
      <Section section={data[0]} id='home' />
      <Section section={data[1]} id='products' />
      <Section section={data[2]} id='services' />
      <Pricing />

      <Footer />
    </div>
  );
};

export default App;
