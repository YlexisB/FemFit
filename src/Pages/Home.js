import React from "react";
import HeroNav from "../Components/HeroNav";
import FirstInfo from "../Components/FirstInfo";
import WhyUs from "../Components/WhyUsStuff/WhyUs";
import Schedule from "../Components/ScheduleStuff/Schedule";
import SecondInfo from "../Components/SecondInfo";
import OurTeam from "../Components/OurTeamStuff/OurTeam";
import BmiCalc from "../Components/BmiCalc";
import ClientFeedback from "../Components/ClientStuff/ClientFeedback";
import BlogCardSec from "../Components/BlogStuff/BlogCardSec";

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
      <ClientFeedback />
      <BlogCardSec />
    </>
  );
};

export default Home;
