import React, { useEffect, useRef } from "react";
import propTypes from "prop-types";
import StyledHeadline from "./Headline.styled";

const Headline = ({ children }) => {
  const headline = useRef(null);

  const updateShadow = e => {
    const centerY =
      headline.current.clientHeight / 2 + headline.current.offsetTop;
    const centerX =
      headline.current.clientWidth / 2 + headline.current.offsetLeft;
    const offsetY = e.clientY - centerY;
    const offsetX = e.clientX - centerX;

    headline.current.style["text-shadow"] = `${offsetX / 25}px ${
      offsetY / 25
    }px 0 #bbb739`;
  };

  useEffect(() => {
    document.addEventListener("mousemove", updateShadow);

    return () => {
      document.removeEventListener("mousemove", updateShadow);
    };
  }, []);

  return <StyledHeadline ref={headline}>{children}</StyledHeadline>;
};

Headline.propTypes = {
  children: propTypes.node.isRequired,
};

export default Headline;
