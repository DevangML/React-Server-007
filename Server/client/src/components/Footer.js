import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import VIT from "../components/pages/image/VIT.svg";
import IEEE from "../assets/videos/IEEE.mp4";

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 500 },{debounceDelay: 50},
    {throttleDelay: 99},{mirror: true},{offset: 120});
    AOS.refresh();
  }, []);

  return (
    <section className="Foot">
      <article data-aos="fade-up">
      <div className="tim-head" >I Study At</div>
      </article>
      <br />
      <img src={VIT} className="foot-img" data-aos="fade-up" />
      <br />
      <figcaption data-aos="fade-up">
        Vishwakarma Institute of Technology
      </figcaption>
      <br />
      <br />
      <article data-aos="fade-up"> 
        <div className="tim-head">Work At</div>
      </article>
      <br />
      <video
        data-aos="fade-up"
        src={IEEE}
        className="foot-img"
        autoPlay
        loop
        muted
        disablePictureInPicture
      />
      <br />
    </section>
  );
}

export default Footer;
