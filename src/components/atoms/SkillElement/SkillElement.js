import React from "react";
import propTypes from "prop-types";
import StyledSkillElement from "./SkillElement.styled";

const SkillElement = ({ children }) => (
  <StyledSkillElement className="about__tile__content__text__icons-wrapper__element">
    {children}
  </StyledSkillElement>
);

SkillElement.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};

export default SkillElement;
