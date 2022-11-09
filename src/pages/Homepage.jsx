import React from "react";
import Navbar from '../components/Navbar/Navbar';
import BenefitsBox from '../components/Homepage/BenefitsBox/BenefitsBox';
import Hero from '../components/Homepage/Hero/Hero';
import Socials from '../components/Homepage/Socials/Socials';
const Homepage  = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-y-6">
        <Hero />
        <div className="flex justify-center gap-7">
          <BenefitsBox />
          <BenefitsBox />
          <BenefitsBox />
        </div>
        <Socials />
      </div>
    </div>
  );
}

export default Homepage;
