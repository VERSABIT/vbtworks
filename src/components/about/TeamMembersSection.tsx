import React from "react";
import "../../assets/css/AboutUsSection.css";
import "../../assets/css/Animation.css";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  description: string;
}

interface AboutUsSectionProps {
  teamMembers: TeamMember[];
}

const TeamMembersSection: React.FC<AboutUsSectionProps> = ({ teamMembers }) => {
  return (
    <div className="aboutcontainer animate-fadeInMoveUp">
      <h2 className="aboutheading-2xl">Meet Our Expert Team</h2>
      <p className="aboutparagraph">
        Our team of professionals is dedicated to delivering exceptional
        enterprise solutions.
      </p>

      <div className="about-team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="about-team-member-card">
            <img
              src={member.image}
              alt={member.name}
              className="about-team-member-image"
            />
            <h4 className="about-team-member-name">{member.name}</h4>
            <p className="about-team-member-position">{member.position}</p>
            <p className="about-team-member-description">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembersSection;
