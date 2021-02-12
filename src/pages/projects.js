import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import ProjectWindow from '../components/organisms/ProjectWindow/ProjectWindow';
import ProjectsWrapper from '../components/organisms/ProjectWrapper/ProjectsWrapper';
import Headline from '../components/atoms/Headline/Headline';

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
        name
        description
        github
        url
      }
    }
  }
`;

const StyledProjectsPage = styled.div`
  h1 {
    position: absolute;
    bottom: 10%;
    left: 350px;
    display: none;
    transition: transform 200s ease;

    @media (min-width: 768px) {
      transform: ${({ isWindowActive }) => (isWindowActive ? 'translateX(-280px)' : 'translateX(0)')};
      display: inline;
      left: 420px;
    }
  }
`;

const ProjectsPage = () => {
  const data = useStaticQuery(query);

  const [isWindowActive, setWindowActive] = useState(false);
  const [activeProject, setActiveProject] = useState({});

  useEffect(() => {
    console.log(activeProject);
  });

  return (
    <StyledProjectsPage isWindowActive={isWindowActive}>
      <ProjectsWrapper
        setWindowActive={setWindowActive}
        isWindowActive={isWindowActive}
        setActiveProject={setActiveProject}
        projects={data}
      />
      <ProjectWindow
        setWindowActive={setWindowActive}
        isWindowActive={isWindowActive}
        activeProject={activeProject}
        projects={data}
      />
      <Headline className="project__headline">Projects</Headline>
    </StyledProjectsPage>
  );
};

export default ProjectsPage;
