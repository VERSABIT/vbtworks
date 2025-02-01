import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faDiagramProject,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import "../../assets/css/ImpactSection.css";
import "../../assets/css/Animation.css";

const ImpactSection = () => {
  return (
    <section className="impact-section animate-fadeInMoveUp">
      <div className="impactcontainer">
        <div className="impacttext-center">
          <h1 className="impacttitle-primary">Our Impact</h1>
          <p className="impactdesc">
            Versabit's solutions have transformed enterprises worldwide.
          </p>
        </div>
        <div className="impactgrid">
          <div className="impactcard">
            <div className="impactcard-content">
              <div className="impacticon">
                <FontAwesomeIcon icon={faUsers} className="fa-users" />
              </div>
              <p className="impactstat">500+</p>
              <p className="impactlabel">Satisfied Clients</p>
            </div>
          </div>
          <div className="impactcard">
            <div className="impactcard-content">
              <div className="impacticon">
                <FontAwesomeIcon
                  icon={faDiagramProject}
                  className="fa-diagram-project"
                />
              </div>
              <p className="impactstat">300+</p>
              <p className="impactlabel">Projects Completed</p>
            </div>
          </div>
          <div className="impactcard">
            <div className="impactcard-content">
              <div className="impacticon">
                <FontAwesomeIcon icon={faAward} className="fa-award" />
              </div>
              <p className="impactstat">50+</p>
              <p className="impactlabel">Industry Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
