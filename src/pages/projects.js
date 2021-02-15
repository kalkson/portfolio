import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import ProjectWindow from '../components/organisms/ProjectWindow/ProjectWindow';
import ProjectsWrapper from '../components/organisms/ProjectWrapper/ProjectsWrapper';
import Headline from '../components/atoms/Headline/Headline';
import device from '../style/breakpoints';

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
        id
      }
    }
  }
`;

const StyledProjectsPage = styled.div`
  & > h1 {
    position: absolute;
    transition: transform 100ms linear;
    display: none;

    @media ${device.tablet} and (min-height: 700px) {
      display: block;
      bottom: 5%;
      transform: ${({ isWindowActive }) => (isWindowActive ? 'translateX(47px)' : 'translateX(300px)')};
    }
  }
`;

const ProjectsPage = () => {
  const data = useStaticQuery(query);

  const [isWindowActive, setWindowActive] = useState(false);
  const [activeProject, setActiveProject] = useState({});

  useEffect(() => {
    document.documentElement.style.setProperty('--primaryColor', '#6ab1de');
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
