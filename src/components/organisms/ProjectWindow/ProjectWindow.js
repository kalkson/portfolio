import React from 'react';
import propTypes from 'prop-types';
import ProjectDetails from '../../molecules/ProjectDetails/ProjectDetails';
import StyledProjectWindow from './ProjectWindow.styled';
import ArrowIcon from '../../../assets/icons/arrow.svg';

const ProjectWindow = ({ isWindowActive, setWindowActive, activeProject, projects }) => (
  <StyledProjectWindow className="project" isWindowActive={isWindowActive}>
    {projects.allDatoCmsProject.nodes.map(project => {
      if (project === activeProject) {
        return <ProjectDetails data={project} key={project.id} />;
      }
      return null;
    })}
    <button
      type="button"
      className="project__return-button"
      onClick={() => {
        setWindowActive(false);
      }}
    >
      <ArrowIcon />
    </button>
  </StyledProjectWindow>
);

ProjectWindow.propTypes = {
  isWindowActive: propTypes.bool.isRequired,
  setWindowActive: propTypes.func.isRequired,
  activeProject: propTypes.shape({
    name: propTypes.string,
    description: propTypes.string,
    github: propTypes.string,
    url: propTypes.string,
    fluid: propTypes.shape(),
  }),
  projects: propTypes.shape({
    allDatoCmsProject: propTypes.shape.isRequired,
  }).isRequired,
};

ProjectWindow.defaultProps = {
  activeProject: {
    name: null,
    description: null,
    github: null,
    url: null,
    fluid: null,
  },
};

export default ProjectWindow;
