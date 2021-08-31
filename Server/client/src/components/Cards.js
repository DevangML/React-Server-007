import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import C from '../assets/images/C.png'
import Cp from '../assets/images/C++.png'
import CS from '../assets/images/css.png'
import ht from '../assets/images/html.png'
import J from '../assets/images/JS.png'
import mern from '../assets/images/mern.png'
import python from '../assets/images/python.png'

function Cards() {
  useEffect(() => {
    AOS.init({duration : 1000});
    AOS.refresh();
  }, []);
  return (
    <section className="cards">
      <h1 className="Head" data-aos="slide-up">About Me</h1>
      <br />
      <h2 align="center" data-aos="slide-up" >
        I am Executive Committee Member at IEEE Students' Branch, VIT Pune
      </h2>
      <br />
      <br />
      <p className='Para' data-aos="slide-up" >
        I am an engineering student at Vishwakarma Institute Of Technology,
        Pune. I study in the AI-DS branch. I love Machine Learning, artificial
        intelligence and web development. I am a Linux enthusiast and like to
        keep Fedora as my main machine. I am a security and privacy enthusiast
        too. Over the last one year I have gained some hand over C, C++, Python,
        HTML, CSS and JavaScript, with two projects one in C and other in
        Python. I am also executive committee member of IEEE Student Branch, VIT
        Pune.
      </p>
      <br />
      <h1 className='Head' data-aos="slide-up" >Skills I have</h1>
      <br/><br/>
      <div className='Cardcont' >
        <img data-aos="slide-up"  className='Img' src={C} width="4em" height="4em" />
        <img data-aos="slide-up"  className='Img' src={Cp} width="4em" height="4em" />
        <img data-aos="slide-up"  className='Img' src={CS} width="4em" height="4em" />
        <img data-aos="slide-up"  className='Img' src={ht} width="4em" height="4em" />
        <img data-aos="slide-up"  className='Img' src={J} width="4em" height="4em" />
        <img data-aos="slide-up"  className='Img' src={python} width="4em" height="4em" />
        <img data-aos="slide-up"  className='Img' src={mern} width="4em" height="4em" />
      </div>
    </section>
  );
}

export default Cards;
