import React from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";

function HeroSection() {
  return (
    <section className="hero-container">
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="Hero-H2">Devang G. Manjramkar</h1>
      <br />
      <Typed
        strings={["I am Web Developer"]}
        typeSpeed={44}
        loop
        className="type"
      />
      <div className="hero-btns">
        <a href="https://drive.google.com/uc?export=download&id=1lcGTUHwzRJJPbqdlv5BwNfPQ8I2ZH-wr" class="button glow-button" target='_blank'>
          Resume
        </a>
         
      </div>
    </section>
  );
}

export default HeroSection;
