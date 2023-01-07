import React from "react";
import Navbar from '../components/Navbar/Navbar';
import BenefitsBox from '../components/Homepage/BenefitsBox/BenefitsBox';
import Hero from '../components/Homepage/Hero/Hero';
import Socials from '../components/Homepage/Socials/Socials';
import WarningModal from '../components/Homepage/WarningModal';
const Homepage  = () => {
  return (
    <div>
      <WarningModal title = "Work in Progress!!!" body = "Front end is finished! Back end is being developed right now!"/>
      <Navbar />
      <div className="flex flex-col gap-y-6">
        <Hero />
        <div className="flex justify-center gap-7 flex-wrap">
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
