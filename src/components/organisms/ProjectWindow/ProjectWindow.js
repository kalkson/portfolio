import React from 'react';
import propTypes from 'prop-types';
import ProjectDetails from '../../molecules/ProjectDetails/ProjectDetails';
import StyledProjectWindow from './ProjectWindow.styled';

const ProjectWindow = ({ isWindowActive, setWindowActive, activeProject, projects }) => (
  <StyledProjectWindow className="project" isWindowActive={isWindowActive}>
    {projects.allDatoCmsProject.nodes.map(project => {
      if (project === activeProject) {
        return <ProjectDetails data={project} />;
      }
      return null;
    })}
    {console.log(isWindowActive)}
    <button
      type="button"
      className="project__return-button"
      onClick={() => {
        setWindowActive(false);
        console.log('asd');
      }}
    >
      ˂
    </button>
  </StyledProjectWindow>
);

ProjectWindow.propTypes = {
  isWindowActive: propTypes.bool.isRequired,
  setWindowActive: propTypes.func.isRequired,
  activeProject: propTypes.shape({
    name: propTypes.string.isRequired,
    fluid: propTypes.shape,
    description: propTypes.string.isRequired,
    github: propTypes.string,
    url: propTypes.string,
  }).isRequired,
  projects: propTypes.shape({
    allDatoCmsProject: propTypes.shape.isRequired,
  }).isRequired,
};

export default ProjectWindow;
