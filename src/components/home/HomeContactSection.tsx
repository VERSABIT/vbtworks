import React from "react";
import { FaEnvelope, FaPhone, FaComments, FaArrowRight } from "react-icons/fa";
import "../../assets/css/home/HomeContactSection.css";
import "../../assets/css/Animation.css";

const HomeContactSection = () => {
  return (
    <div className="homecontact-container">
      <div className="homecontact-header">
        <h2 className="homecontact-title">Get in Touch with Us</h2>
        <p className="homecontact-description">
          We are here to assist you with any questions or inquiries about our
          enterprise solutions.
        </p>
      </div>
      <div className="homecontact-details">
        <div className="homecontact-item">
          <div className="homecontact-icon">
            <FaEnvelope className="homeicon" />
          </div>
          <div className="homecontact-info">
            <h3 className="homecontact-subtitle">General Inquiries</h3>
            <p className="homecontact-text">
              Reach out to us for any general questions or information.
            </p>
            <p className="homecontact-text">
              <a href="/contact" className="homecontact-link">
                Email Us
                <FaArrowRight className="homearrow-icon" />
              </a>
            </p>
          </div>
        </div>
        <div className="homecontact-item">
          <div className="homecontact-icon">
            <FaPhone className="homeicon" />
          </div>
          <div className="homecontact-info">
            <h3 className="homecontact-subtitle">Customer Support</h3>
            <p className="homecontact-text">
              Need help? Our support team is here to assist you.
            </p>
            <p className="homecontact-text">
              <a href="/contact" className="homecontact-link">
                Call Support
                <FaArrowRight className="homearrow-icon" />
              </a>
            </p>
          </div>
        </div>
        <div className="homecontact-item">
          <div className="homecontact-icon">
            <FaComments className="homeicon" />
          </div>
          <div className="homecontact-info">
            <h3 className="homecontact-subtitle">Consultation</h3>
            <p className="homecontact-text">
              Discuss your project needs with our experts.
            </p>
            <p className="homecontact-text">
              <a href="/contact" className="homecontact-link">
                Book a Consultation
                <FaArrowRight className="homearrow-icon" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContactSection;
