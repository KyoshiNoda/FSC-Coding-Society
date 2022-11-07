import React from "react";
import Navbar from '../components/Navbar/Navbar';
import BenefitsBox from '../components/Homepage/BenefitsBox/BenefitsBox';
import Hero from '../components/Homepage/Hero/Hero';
import Socials from '../components/Homepage/Socials/Socials'
import WarningModal from "../components/Homepage/WarningModal";
const Homepage  = () => {
  return (
    <div>
      <WarningModal/>
      <Navbar />
      <div className="flex flex-col gap-y-6">
        <Hero />
        <BenefitsBox />
        <Socials />
      </div>
    </div>
  );
}

export default Homepage;
