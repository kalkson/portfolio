import propTypes from "prop-types";
import gsap from "gsap/gsap-core";
import React, { useRef, useEffect } from "react";
import ProjectItem from "../../molecules/ProjectItem/ProjectItem";
import StyledProjectsWrapper from "./ProjectsWrapper.styled";

const ProjectsWrapper = ({
  setWindowActive,
  isWindowActive,
  setActiveProject,
  projects,
}) => {
  const wrapper = useRef(null);

  useEffect(() => {
    Array.from(wrapper.current.children).forEach(project => {
      gsap.to(project, { opacity: 1, x: "0" });
    });
  });

  return (
    <StyledProjectsWrapper ref={wrapper} isWindowActive={isWindowActive}>
      {projects.allDatoCmsProject.nodes.map(project => (
        <ProjectItem
          key={project.name}
          data={project}
          onClick={() => {
            setWindowActive(true);
            setActiveProject(project);
          }}
        />
      ))}
    </StyledProjectsWrapper>
  );
};

ProjectsWrapper.propTypes = {
  setWindowActive: propTypes.func.isRequired,
  setActiveProject: propTypes.func.isRequired,
  isWindowActive: propTypes.bool.isRequired,
  projects: propTypes.shape({
    allDatoCmsProject: propTypes.shape.isRequired,
  }).isRequired,
};

export default ProjectsWrapper;
