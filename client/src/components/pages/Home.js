import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Dfooter from '../Dfooter';


function Home() {
  return (
    <section>
      <HeroSection />
      <Cards />
      <Footer />
      <Dfooter/>
    </section>
  );
}

export default Home;
