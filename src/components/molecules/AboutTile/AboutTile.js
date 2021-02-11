import React from "react";
import propTypes from "prop-types";
import StyledAboutTile from "./AboutTile.styled";

const AboutTile = ({ headline, children }) => (
  <StyledAboutTile className="about__tile">
    <h2 className="about__tile__headline">
      <div className="about__tile__headline__square" />
      {headline}
    </h2>
    <div className="about__tile__content">{children}</div>
  </StyledAboutTile>
);

AboutTile.propTypes = {
  headline: propTypes.string.isRequired,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};

export default AboutTile;
