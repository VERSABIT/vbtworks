import React from "react";
import "../assets/css/ExploreServices.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight, 
} from "@fortawesome/free-solid-svg-icons";
import "../assets/css/Animation.css"


const Exploreservices = () => {
  return (
    <div className="exploreservice-categories">
      <section className="exploresection">
        <div className="exploresection-header">
          <h2 className="exploretitle">Our Service Categories</h2>
          <p className="exploredescription">
            Explore the range of services we offer to enhance your business.
          </p>
        </div>
        <div className="exploreservice-grid">
          <ServiceCard
            title="Project Management"
            description="Efficiently manage your projects with our solutions."
            imageSrc="https://images.unsplash.com/photo-1685478237148-aaf613b2e8ad?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvamVjdCxtYW5hZ2VtZW50fHx8fHx8MTcxNTczMjQ0MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800"
          />
          <ServiceCard
            title="Enterprise Solutions"
            description="Customized solutions to meet your enterprise needs."
            imageSrc="https://images.unsplash.com/photo-1552288084-454d4fa5caa1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8ZW50ZXJwcmlzZSxzb2x1dGlvbnN8fHx8fHwxNzE1NzMyNDQw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800"
          />
          <ServiceCard
            title="Testing & QA"
            description="Ensure the quality and reliability of your software."
            imageSrc="https://images.unsplash.com/photo-1583911860071-a2638580e8f4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVzdGluZyxRQXx8fHx8fDE3MTU3MzI0NDA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800"
          />
          <ServiceCard
            title="Cybersecurity"
            description="Protect your business with our advanced cybersecurity services."
            imageSrc="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=700&ixid=MnwxfDB8MXxyYW5kb218MHx8Y3liZXJzZWN1cml0eXx8fHx8fDE3MTU3MzI0NDA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800"
          />
        </div>
        <div className="explorebutton-container">
          <button className="explorebtn">
            Browse All Services
            <FontAwesomeIcon icon={faArrowRight} className="expertiseicon" />
          </button>
        </div>
      </section>
    </div>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className="exploreservice-card">
      <img
        src={imageSrc}
        alt=""
        className="exploreservice-image"
      />
      <div className="exploreservice-content">
        <h3 className="exploreservice-title">{title}</h3>
        <p className="exploreservice-description">{description}</p>
      </div>
    </div>
  );
};

export default Exploreservices;
