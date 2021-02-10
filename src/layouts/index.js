import React from "react";
import propTypes from "prop-types";
import GlobalStyle from "../style/GlobalStyle";
import StyledMainLayout from "./index.styled";
import Nav from "../components/organisms/Nav/Nav";

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Nav />
    <StyledMainLayout>{children}</StyledMainLayout>
  </>
);

MainLayout.propTypes = {
  children: propTypes.oneOfType([
    propTypes.node,
    propTypes.arrayOf([propTypes.node]),
  ]).isRequired,
};

export default MainLayout;
