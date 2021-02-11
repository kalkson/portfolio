import { graphql, useStaticQuery } from "gatsby";
import propTypes from "prop-types";
import gsap from "gsap/gsap-core";
import React, { useRef, useEffect } from "react";
import ProjectItem from "../../molecules/ProjectItem/ProjectItem";
import StyledProjectsWrapper from "./ProjectsWrapper.styled";

const query = graphql`
  query MyQuery {
    allDatoCmsProject {
      nodes {
        image {
          fluid {
            ...GatsbyDatoCmsFluid
            tracedSVG
          }
        }
      }
    }
  }
`;

const ProjectsWrapper = ({ setWindowActive, isWindowActive }) => {
  const data = useStaticQuery(query);
  const wrapper = useRef(null);

  useEffect(() => {
    Array.from(wrapper.current.children).forEach(project => {
      gsap.to(project, { opacity: 1, x: "0" });
    });
  });

  return (
    <StyledProjectsWrapper ref={wrapper} isWindowActive={isWindowActive}>
      {data.allDatoCmsProject.nodes.map(project => {
        console.log(project);
        return (
          <ProjectItem
            key={project.name}
            data={project}
            onClick={() => setWindowActive(true)}
          />
        );
      })}
    </StyledProjectsWrapper>
  );
};

ProjectsWrapper.propTypes = {
  setWindowActive: propTypes.func.isRequired,
  isWindowActive: propTypes.bool.isRequired,
};

export default ProjectsWrapper;
