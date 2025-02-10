import React from "react";
import "../../assets/css/Animation.css";
import "../../assets/css/home/HomeExpertSection.css";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const ExpertSection = () => {
  return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-header">
          <h2>Meet Our Expert Team</h2>
          <p>
            Our team of professionals is dedicated to delivering innovative
            enterprise solutions tailored to your needs.
          </p>
        </div>
        <ul className="team-list">
          <li className="team-list-item">
            <img
              className="team-member-image"
              alt="Jibs"
              src="#"
            />
            <div className="team-member-details">
              <h3>Ajibola 'Jibs' Oseni</h3>
              <p>CEO / Founder</p>
              <p>
                Jibs leads Versabit with a vision to transform enterprise
                technology solutions.
              </p>
              <ul className="team-member-links">
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <a href="#">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
            <hr />
          </li>
          <li className="team-list-item">
            <img
              className="team-member-image"
              alt="#"
              src="#"
            />
            <div className="team-member-details">
              <h3></h3>
              <p>CTO</p>
              <p>
                
              </p>
              <ul className="team-member-links">
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <a href="#">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
            <hr />
          </li>
          <li className="team-list-item">
            <img
              className="team-member-image"
              alt=""
              src="#"
            />
            <div className="team-member-details">
              <h3></h3>
              <p>Lead Developer</p>
              <p>
                
                at Versabit.
              </p>
              <ul className="team-member-links">
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <a href="https://linkedin.com">
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ExpertSection;
