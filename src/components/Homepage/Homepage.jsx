import React from "react";
import Navbar from "../Navbar/Navbar";
import BenefitsBox from "./BenefitsBox/BenefitsBox";
import Socials from "./Socials/Socials";
import Hero from "./Hero/Hero";
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
