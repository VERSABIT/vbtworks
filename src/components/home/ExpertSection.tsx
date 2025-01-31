import React from "react";
import "../../assets/css/Animation.css";
import "../../assets/css/home/HomeExpertSection.css"
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

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
              alt="Alex Johnson"
              src="https://images.unsplash.com/photo-1522874339442-b66b63414ab4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1680&ixid=MnwxfDB8MXxyYW5kb218MHx8cG9ydHJhaXQsdGVjaG5vbG9neXx8fHx8MTcxNTczMjM4Mw&ixlib=rb-4.0.3&q=80"
            />
            <div className="team-member-details">
              <h3>Alex Johnson</h3>
              <p>CEO / Founder</p>
              <p>
                Alex leads Versabit with a vision to transform enterprise
                technology solutions.
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
            <hr />
          </li>
          <li className="team-list-item">
            <img
              className="team-member-image"
              alt="Jamie Lee"
              src="https://images.unsplash.com/photo-1446161543652-83eaa65fddab?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1680&ixid=MnwxfDB8MXxyYW5kb218MHx8cG9ydHJhaXQsdGVjaG5vbG9neXx8fHx8MTcxNTczMjM4Mw&ixlib=rb-4.0.3&q=80"
            />
            <div className="team-member-details">
              <h3>Jamie Lee</h3>
              <p>CTO</p>
              <p>
                Jamie oversees the technical strategy and ensures the delivery
                of cutting-edge solutions.
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
            <hr />
          </li>
          <li className="team-list-item">
            <img
              className="team-member-image"
              alt="Taylor Smith"
              src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1680&ixid=MnwxfDB8MXxyYW5kb218MHx8cG9ydHJhaXQsdGVjaG5vbG9neXx8fHx8MTcxNTczMjM4Mw&ixlib=rb-4.0.3&q=80"
            />
            <div className="team-member-details">
              <h3>Taylor Smith</h3>
              <p>Lead Developer</p>
              <p>
                Taylor's expertise in software development drives the innovation
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
