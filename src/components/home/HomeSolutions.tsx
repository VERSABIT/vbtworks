import React from "react";
import customImage from "../../assets/advert_man.png";
import {
  faCashRegister as posIcon,
  faCreditCard as paymentIcon,
  faShoppingCart as ecommerceIcon,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/css/home/HomeSolutions.css";
import "../../assets/css/Animation.css";

const HomeSolutions = () => {
  return (
    <section className="advert">
      <div className="advert-image-container">
        <img
          src={customImage}
          alt="Customized to Meet Your Needs"
          className="homecustom-image"
        />
      </div>
      <div className="advert-content">
        <h4 className="advert-title">Innovative Enterprise Solutions</h4>
        <h2 className="advert-heading">Customized to Meet Your Needs</h2>
        <p className="advert-description">
          Explore how Versabit's cutting-edge solutions can enhance your
          business processes and drive growth.
        </p>
        <div className="advert-features">
          <div className="feature-item">
            <FontAwesomeIcon icon={ecommerceIcon} className="feature-icon" />
            <div>
              <h3 className="feature-heading">E-commerce Integration</h3>
              <p className="feature-description">
                Seamlessly integrate e-commerce platforms to boost your online
                sales.
              </p>
            </div>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={paymentIcon} className="feature-icon" />
            <div>
              <h3 className="feature-heading">Payment Processing</h3>
              <p className="feature-description">
                Reliable and secure payment processing solutions for your
                business.
              </p>
            </div>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={posIcon} className="feature-icon" />
            <div>
              <h3 className="feature-heading">POS Solutions</h3>
              <p className="feature-description">
                State-of-the-art POS solutions to streamline in-store
                operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSolutions;
