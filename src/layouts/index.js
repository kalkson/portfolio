import React from "react";
import propTypes from "prop-types";
import GlobalStyle from "../style/GlobalStyle";

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

MainLayout.propTypes = {
  children: propTypes.oneOfType([
    propTypes.node,
    propTypes.arrayOf([propTypes.node]),
  ]).isRequired,
};

export default MainLayout;
