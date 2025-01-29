import React from "react";
import EnterpriseSection from "../components/EnterpriseServiceSection";
import OurExpertiseServiceSection from "../components/OurExpertiseSection";
import ExploreServices from "../components/ExploreServices";
import TransformBusiness from "../components/TransformBusiness";
import ContactSection from "../components/about/ContactSection";
import FAQSection from "../components/FAQSection";
import Footer from "../helpers/Footer";

const Services: React.FC = () => {
  return (
    <div id="root">
        <EnterpriseSection/>
        <OurExpertiseServiceSection/> 
        <ExploreServices/>
        <TransformBusiness/>
        <ContactSection/>
        <FAQSection/>
        <Footer/>
    </div>
  );
};

export default Services;
