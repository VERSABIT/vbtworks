import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import ButtonHelper from "../../helpers/ButtonHelper";
import empoweringDivImg from "../../assets/empoweringDivImg.png";
import "../../assets/css/index.css"
import "../../assets/css/Animation.css"; 
import { Link } from "react-router-dom";

const MainSection = () => {
 

  return (
    <div className="main-section animate-fadeInMoveUp">
      <div className="landinggrid-container">
        <div className="landingcontent-container">
          <div className="landingtext-container">
            <h2 className="landingtext-main-empower">
              Empowering Your Enterprise with Tailored Solutions
            </h2>
            <p className="landingtext-description">
              Versabit offers bespoke enterprise solutions to streamline your
              business operations and overcome the limitations of off-the-shelf
              software.
            </p>
            <div className="landingbuttons-container">
              <Link to="/services" className="landingbtn-primary" style={{ color: "#ffffff"}}>
                <ButtonHelper
                  text={"Discover Our Solutions"}
                  className={"landingbtn-primary"} 
                />
              </Link>
              <Link to="/services" className="landingbtn-secondary" style={{ color: "#0F172A"}}>
                <ButtonHelper
                  text={"Learn More"}
                  icon={faArrowRight}
                  className={"landingbtn-secondary"} 
                />
              </Link>
            </div>
            <div className="landingstats-container">
              <div className="landingstat-item">
                <div className="landingstat-info">
                  <h3>500+</h3>
                  <p>Satisfied Clients</p>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className="landingstat-icon" />
              </div>
              <div className="landingstat-item">
                <div className="landingstat-info">
                  <h3>1M+</h3>
                  <p>Transactions Processed</p>
                </div>
                <FontAwesomeIcon icon={faChevronRight} className="landingstat-icon" />
              </div>
              <div className="landingstat-item">
                <div className="landingstat-info">
                  <h3>200+</h3>
                  <p>Custom Integrations</p>
                </div>
              </div>
            </div>
          </div>
          <div className="landingimage-container">
            <img
              src={empoweringDivImg}
              alt="Working"
              className="landingempowering__image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
