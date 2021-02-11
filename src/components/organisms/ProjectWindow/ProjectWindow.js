import React from "react";
import propTypes from "prop-types";
import Headline from "../../atoms/Headline/Headline";
import ProjectDetails from "../../molecules/ProjectDetails/ProjectDetails";
import StyledProjectWindow from "./ProjectWindow.styled";

const ProjectWindow = ({ isWindowActive, setWindowActive }) => (
  <StyledProjectWindow className="project" isWindowActive={isWindowActive}>
    <ProjectDetails />
    <Headline className="project__headline">Projects</Headline>
  </StyledProjectWindow>
);

ProjectWindow.propTypes = {
  isWindowActive: propTypes.bool.isRequired,
  setWindowActive: propTypes.func.isRequired,
};

export default ProjectWindow;
