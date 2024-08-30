import React from "react";
import "../../assets/css/AboutStartSection.css";
import "../../assets/css/Animation.css"
import {
  faArrowRight,
  faUserShield,
  faGears,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutStartSection = () => {
  return (
    <div className="aboutstart-bg-gradient relative animate-fadeInMoveUp">
      <section className="aboutstart-relative-section">
        <img
          className="aboutstartbackground-image"
          alt="credit-cards"
          src="https://images.unsplash.com/photo-1583259034006-5ea8361109e7?crop=entropy&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;h=1080&amp;ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaG5vbG9neSxlbnRlcnByaXN8fHx8fHwxNzE1NzMyNDcx&amp;ixlib=rb-4.0.3&amp;q=80&amp;utm_campaign=api-credit&amp;utm_medium=referral&amp;utm_source=unsplash_source&amp;w=1920"
          style={{ color: "#0162da", opacity: 0.5 }}
        />
        <div className="aboutstartcontent-wrapper">
          <div className="aboutstarttext-container">
            <h1 className="aboutstarttitle-primary">
              <div className="aboutstarttext-gradient">
                Transforming Enterprises with Customized Solutions
              </div>
            </h1>
            <p className="aboutstartdescription">
              <div>
                Versabit provides innovative and tailored enterprise solutions
                to streamline your business processes.
              </div>
            </p>
            <button className="aboutstartdiscover-button">
              <div>Discover Our Solutions</div>
              <div className="aboutstarticon-container">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </button>
            <div className="aboutstartfeature-grid">
              <div className="aboutstartfeature-item">
                <div className="aboutstartfeature-icon">
                  <FontAwesomeIcon icon={faGears} />
                </div>
                <p className="aboutstartfeature-text">Customized Solutions</p>
              </div>
              <div className="aboutstartfeature-item">
                <div className="aboutstartfeature-icon">
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
                <p className="aboutstartfeature-text">Business Optimization</p>
              </div>
              <div className="aboutstartfeature-item">
                <div className="aboutstartfeature-icon">
                  <FontAwesomeIcon icon={faUserShield} />
                </div>
                <p className="aboutstartfeature-text">Security Enhancement</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutStartSection;
