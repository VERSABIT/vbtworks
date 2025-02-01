import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../assets/css/TransformBusiness.css";
import "../assets/css/Animation.css";

const TransformBusiness: React.FC = () => {
  return (
    <section className="servicetransform-section">
      <div className="servicetransform-container">
        <div className="servicetransform-content">
          <div className="servicetransform-text">
            <h2 className="servicetransform-title">
              Ready to Transform Your Business?
            </h2>
            <p className="servicetransform-description">
              Contact Versabit today and discover how our solutions can help
              your enterprise thrive.
            </p>
          </div>
          <div className="servicetransform-features">
            <Feature icon={faCheck} text="Tailored Solutions" />
            <Feature icon={faCheck} text="Expert Team" />
            <Feature icon={faCheck} text="Proven Results" />
            <Feature icon={faCheck} text="Ongoing Support" />
          </div>
          <button className="servicetransform-button">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="servicetransform-button-icon"
            />
            Get in Touch
          </button>
        </div>
        <div className="servicetransform-image-container">
          <img
            className="servicetransform-image"
            src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1300&ixid=MnwxfDB8MXxyYW5kb218MHx8YnVzaW5lc3MsdGVjaG5vbG9neXx8fHx8fDE3MTU3MzI0NDA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1260"
            alt="Business Transformation"
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureProps {
  icon: any;
  text: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, text }) => {
  return (
    <div className="servicetransform-feature">
      <FontAwesomeIcon icon={icon} className="servicetransform-feature-icon" />
      <span className="servicetransform-feature-text">{text}</span>
    </div>
  );
};

export default TransformBusiness;
