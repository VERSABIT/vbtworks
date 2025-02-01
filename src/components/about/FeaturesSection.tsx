import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faMobileRetro,
  faRocket,
  faTeletype,
  faGears,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/FeaturesSection.css";
import "../../assets/css/Animation.css";

const features = [
  {
    title: "Innovative Solutions",
    description:
      "We provide cutting-edge enterprise solutions tailored to your needs.",
    icon: faMagnifyingGlass,
    iconClass: "aboutfeature-icon-blue",
    iconTextClass: "aboutfeature-icon-text-blue",
  },
  {
    title: "High Performance",
    description: "Our solutions ensure optimal performance and efficiency.",
    icon: faRocket,
    iconClass: "aboutfeature-icon-orange",
    iconTextClass: "aboutfeature-icon-text-orange",
  },
  {
    title: "Seamless Integration",
    description: "Easily integrate our solutions with your existing systems.",
    icon: faGears,
    iconClass: "aboutfeature-icon-green",
    iconTextClass: "aboutfeature-icon-text-green",
  },
  {
    title: "Top-notch Security",
    description: "We prioritize security to protect your enterprise data.",
    icon: faShieldHalved,
    iconClass: "aboutfeature-icon-purple",
    iconTextClass: "aboutfeature-icon-text-purple",
  },
  {
    title: "User-Friendly",
    description: "Our solutions are designed to be intuitive and easy to use",
    icon: faMobileRetro,
    iconClass: "aboutfeature-icon-purple",
    iconTextClass: "aboutfeature-icon-text-purple",
  },
  {
    title: "24/7 Support",
    description: "Our team is available around the clock to assist you.",
    icon: faTeletype,
    iconClass: "aboutfeature-icon-blue",
    iconTextClass: "aboutfeature-icon-text-purple",
  },
];

const FeatureSection = () => {
  return (
    <div className="aboutcontainer animate-fadeInMoveUp">
      <section className="aboutfeature-section aboutfeature-section-dark">
        <h2 className="heading-2xl">About Us</h2>
        <p className="aboutfeature-description">
          Versabit offers bespoke enterprise solutions to streamline your
          business operations and overcome the limitations of off-the-shelf
          software. Our team of dedicated professionals is committed to
          providing top-notch services that cater to the unique needs of each
          client.
        </p>
        <div className="aboutfeature-container">
          {features.map((feature, index) => (
            <div key={index} className="aboutfeature-item">
              <div className={`aboutfeature-icon ${feature.iconClass}`}>
                <FontAwesomeIcon
                  icon={feature.icon}
                  className={`aboutfeature-icon-text ${feature.iconTextClass}`}
                />
              </div>
              <h3 className="aboutfeature-title">{feature.title}</h3>
              <p className="aboutfeature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;
