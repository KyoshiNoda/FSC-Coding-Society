import React from "react";
import Navbar from '../components/Navbar/Navbar';
import BenefitsBox from '../components/Homepage/BenefitsBox/BenefitsBox';
import Hero from '../components/Homepage/Hero/Hero';
import Socials from '../components/Homepage/Socials/Socials'
const Homepage  = () => {
  return (
    <div classname = 'flex-col space-y-11'>
      <Navbar />
      <Hero />
      <BenefitsBox />
      <Socials />
    </div>
  );
}

export default Homepage;
