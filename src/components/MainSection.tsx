import React from "react";
import "../assets/css/index.css";

import Footer from "../helpers/Footer";
import HomeContactSection from "./home/HomeContactSection";
import HomeTransformSection from "./home/HomeTransformSection";
import HomeImpactNumbers from "./home/HomeImpactNumbers";
import ExpertSection from "./home/ExpertSection";
import HomeSolutions from "./home/HomeSolutions";
import LandingSection from "./home/LandingSection";

const MainSection: React.FC = () => {
  return (
    <div>
      <LandingSection/>
      <HomeSolutions/>
      <ExpertSection/>
      <HomeImpactNumbers/>
      <HomeTransformSection/>
      <HomeContactSection/>
      <Footer />
    </div>
  );
};

export default MainSection;
