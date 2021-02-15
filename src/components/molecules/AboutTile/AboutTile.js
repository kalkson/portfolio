import React, { useEffect, useRef } from "react";
import propTypes from "prop-types";
import gsap from "gsap";
import StyledAboutTile from "./AboutTile.styled";

const AboutTile = ({ headline, children }) => {
  const tile = useRef(null);
  const headlineRef = useRef(null);
  const content = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      headlineRef.current,
      { opacity: 0, x: "-30" },
      { opacity: 1, x: "0" }
    );
    tl.fromTo(
      content.current,
      { opacity: 0, y: "-30" },
      { opacity: 1, y: "0" }
    );

    const skills =
      content.current?.querySelectorAll(
        ".about__tile__content__text__icons-wrapper__element"
      ) || null;

    if (skills) {
      Array.from(skills).map((skill, i) => {
        tl.fromTo(
          skill,
          { opacity: 0, scale: "3" },
          { opacity: 1, scale: "1", duration: "0.06", delay: i * 0.01 }
        );

        return null;
      });
    }

    tl.play();
  }, []);

  return (
    <StyledAboutTile className="about__tile" ref={tile}>
      <h2 className="about__tile__headline" ref={headlineRef}>
        <div className="about__tile__headline__square" />
        {headline}
      </h2>
      <div className="about__tile__content" ref={content}>
        {children}
      </div>
    </StyledAboutTile>
  );
};

AboutTile.propTypes = {
  headline: propTypes.string.isRequired,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};

export default AboutTile;
