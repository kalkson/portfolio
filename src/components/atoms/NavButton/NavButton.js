import React from "react";
import propTypes from "prop-types";
import StyledNavButton from "./NavButton.styled";

const NavButton = ({ children }) => (
  <StyledNavButton>
    <span>{children}</span>
    <div className="nav__button__background" />
  </StyledNavButton>
);

NavButton.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};

export default NavButton;
