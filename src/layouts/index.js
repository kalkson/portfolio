import React from "react";
import propTypes from "prop-types";

const MainLayout = ({ children }) => <>{children}</>;

MainLayout.propTypes = {
  children: propTypes.oneOfType([
    propTypes.node,
    propTypes.arrayOf([propTypes.node]),
  ]).isRequired,
};

export default MainLayout;
