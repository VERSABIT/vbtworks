import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faLightbulb,
  faClock,
  faServer,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/css/OurExpertiseSection.css";
import "../assets/css/Animation.css";

const OurExpertiseServiceSection = () => {
  return (
    <section className="expertisesection dark">
      <div className="expertisecontainer max-w-8xl">
        <div className="expertisegrid">
          <div>
            <h2 className="expertisetitle-primary">Our Expertise</h2>
            <p className="expertisedesc dark">
              Discover how Versabit's comprehensive services can transform your
              business.
            </p>
            <div className="mt-8">
              <button className="expertisebtn-primary">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="expertiseicon"
                />
                Explore Services
              </button>
            </div>
          </div>
          <div>
            <div className="expertisecustom-grid ">
              <div className="expertisespace-y-5">
                <div className="expertisecard">
                  <div className="expertisepx-4 py-5 sm:p-6">
                    <FontAwesomeIcon
                      icon={faLightbulb}
                      className="expertiseicon dark"
                    />
                    <h3 className="expertisetitle-secondary dark">
                      IT Advisory
                    </h3>
                    <p className="expertisedesc dark">
                      Expert guidance to align your IT strategy with your
                      business goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="expertisespace-y-5">
                <div className="expertisecard">
                  <div className="expertisepx-4 py-5 sm:p-6">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="expertiseicon dark"
                    />
                    <h3 className="expertisetitle-secondary dark">
                      On-demand IT
                    </h3>
                    <p className="expertisedesc dark">
                      {" "}
                      Flexible IT support tailored to your specific needs.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="expertisespace-y-5">
                <div className="expertisecard">
                  <div className="px-4 py-5 sm:p-6">
                    <FontAwesomeIcon
                      icon={faServer}
                      className="expertiseicon dark"
                    />
                    <h3 className="expertisetitle-secondary dark">
                      Infrastructure Services{" "}
                    </h3>
                    <p className="expertisedesc dark">
                      Robust infrastructure solutions to support your enterprise{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="expertisespace-y-5">
                <div className="expertisecard">
                  <div className="px-4 py-5 sm:p-6">
                    <FontAwesomeIcon
                      icon={faCode}
                      className="expertiseicon dark"
                    />
                    <h3 className="expertisetitle-secondary dark">
                      Software Development
                    </h3>
                    <p className="expertisedesc dark">
                      Custom software solutions to meet your unique business
                      needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExpertiseServiceSection;
