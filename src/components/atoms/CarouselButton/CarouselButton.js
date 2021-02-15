import React from "react";
import propTypes from "prop-types";
import StyledCarouselButton from "./CarouselButton.styled";

const CarouselButton = ({ children, active, activeNumber }) => (
  <StyledCarouselButton active={active} activeNumber={activeNumber}>
    {children}
  </StyledCarouselButton>
);

CarouselButton.propTypes = {
  children: propTypes.node.isRequired,
  active: propTypes.bool,
  activeNumber: propTypes.number,
};

CarouselButton.defaultProps = {
  active: false,
  activeNumber: null,
};

export default CarouselButton;
