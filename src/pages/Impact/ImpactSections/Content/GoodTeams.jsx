import React, { useEffect, useRef } from "react";
import { goodTeams } from "../../../../constants/impact";
import { LinkButton } from "../../../../components/LinkButton/LinkButton";
import gsap from "gsap";

export const GoodTeams = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, x: 500 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          delay: 0.2,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 95%",
          },
        }
      );
    }
  }, []);

  return (
    <div className="good-teams">
      <h2 ref={headerRef}>
        Our Good Teams Corporate Team Building days offers an opportunity to get
        out of the office and reconnect amidst the magic of Two Good Co.
      </h2>

      <div className="good-teams-content">
        {goodTeams.map((card) => (
          <GoodTeamsCard {...card} />
        ))}
      </div>
    </div>
  );
};

const GoodTeamsCard = ({ image, content, links }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 500 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.2,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 95%",
          },
        }
      );
    }
  }, []);

  return (
    <div className="good-teams-card" ref={cardRef}>
      <div className="good-teams-img">
        <img src={image} alt="good-team-card" />
      </div>

      <div className="good-teams-text">
        {content.map((text) => (
          <p>{text}</p>
        ))}
      </div>

      <div className="good-teams-links">
        {links.map((link) => (
          <LinkButton title={link.title} href={link.linkHref} />
        ))}
      </div>
    </div>
  );
};
