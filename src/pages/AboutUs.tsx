// src/components/AboutUs.tsx
import React from "react";
import Footer from "../helpers/Footer"; 
import AboutStartSection from "../components/about/AboutStartSection";
import FeatureSection from "../components/about/FeaturesSection";
import ImpactSection from "../components/about/ImpactNumbers";
import TeamMembersSection from "../components/about/TeamMembersSection";
import ContactSection
 from "../components/about/ContactSection";
import "tailwindcss/tailwind.css";
import { teamMembers

} from "../helpers/teamMembers";
import TransformSection from "../components/about/TransformSection"; 


const AboutUs: React.FC = () => {
  return (
    <div id="root">
      <AboutStartSection/>
      <FeatureSection/>
      <TeamMembersSection teamMembers={teamMembers}/>
      <ImpactSection/>
      <TransformSection/> 
      <ContactSection/>
      <Footer/>
    </div>
  );
};

export default AboutUs;
