import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ASC from "../../assets/images/Proj/ASC.png";
import Pandemic from "../../assets/images/Proj/Pandemic.jpg";
import Phoenix from "../../assets/images/Proj/Phoenix.png";
import WebSite from "../../assets/images/Proj/WebSite.png";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 600 });
    AOS.refresh();
  }, []);
  return (
    <section
      className="projects"
    >
      <div className="tim-head">My Projects</div>
      <div className="pcrdcont">
        <div className="pcrd">
          <a
            href="https://github.com/DevangML/Advanced-Scientific-Calculator"
            target="_blank"
            className="PA"
          >
            <img src={ASC} className="PImg" />
            <figcaption className="Pfigcapt">
              Advanced Scientific Calculator
            </figcaption>
          </a>
          <a
            href="https://github.com/DevangML/DevangML.github.io"
            target="_blank"
            className="PA"
          >
            <img src={Pandemic} className="PImg" />
            <figcaption className="Pfigcapt">Website</figcaption>
          </a>
        </div>
        <br />
        <br />
        <br />
        <div className="pcrd">
          <a
            href="https://github.com/DevangML/Pandemic-Warrior"
            target="_blank"
            className="PA"
          >
            <img src={Phoenix} className="PImg" />
            <figcaption className="Pfigcapt">Pandemic Warrior</figcaption>
          </a>
          <a
            href="https://github.com/DevangML/Phoenix-The-Virtual-Assistant"
            target="_blank"
            className="PA"
          >
            <img src={WebSite} className="PImg" />
            <figcaption className="Pfigcapt">
              Phoenix-The-Virtual-Assistant
            </figcaption>
          </a>
        </div>
      </div>
    </section>
  );
}
