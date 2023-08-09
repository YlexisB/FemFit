import React from "react";
import HeroNav from "../Components/HeroNav";
import FirstInfo from "../Components/FirstInfo";
import WhyUs from "../Components/WhyUs";
import Schedule from "../Components/Schedule";
import SecondInfo from "../Components/SecondInfo";
import OurTeam from "../Components/OurTeam";
import BmiCalc from "../Components/BmiCalc";

const Home = () => {
  return (
    <>
      <HeroNav />
      <FirstInfo />
      <WhyUs />
      <Schedule />
      <SecondInfo />
      <OurTeam />
      <BmiCalc />
    </>
  );
};

export default Home;
