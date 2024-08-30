import React from "react";
import EnterpriseSection from "../components/EnterpriseServiceSection";
import OurExpertiseServiceSection from "../components/OurExpertiseSection";
import ExploreServices from "../components/ExploreServices";
import TransformBusiness from "../components/TransformBusiness";
import ContactSection from "../components/about/ContactSection";
import FAQSection from "../components/FAQSection";
import Footer from "../helpers/Footer";

const servicesData = [
  {
    title: "Custom Software Development",
    description:
      "Tailored software solutions to meet your unique business needs.",
    image: "path/to/image1.jpg", // replace with your image paths
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable cloud solutions to enhance your business operations.",
    image: "path/to/image2.jpg", // replace with your image paths
  },
  {
    title: "IT Consulting",
    description:
      "Expert IT consulting services to guide your technology strategy.",
    image: "path/to/image3.jpg", // replace with your image paths
  },
  {
    title: "Data Analytics",
    description: "Advanced analytics to turn data into actionable insights.",
    image: "path/to/image4.jpg", // replace with your image paths
  },
];

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
