import { Link } from "gatsby";
import React from "react";
import NavButton from "../../atoms/NavButton/NavButton";
import StyledNav from "./Nav.styled";

const Nav = () => (
  <StyledNav className="nav">
    <Link to="/" activeClassName="active-nav-button">
      <NavButton>about</NavButton>
    </Link>
    <Link to="/projects" activeClassName="active-nav-button">
      <NavButton>projects</NavButton>
    </Link>
    <Link to="/contact" activeClassName="active-nav-button">
      <NavButton>contact</NavButton>
    </Link>
  </StyledNav>
);

export default Nav;
