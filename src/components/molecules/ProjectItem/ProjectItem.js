import React from 'react';
import propTypes from 'prop-types';
import GatsbyImage from 'gatsby-image';
import StyledProjectItem from './ProjectItem.styled';

const ProjectItem = ({
  data: {
    image: { fluid },
    name,
  },
  onClick,
}) => (
  <StyledProjectItem className="project-item" onClick={onClick}>
    <GatsbyImage fluid={fluid} className="project-item__image" />
    <h3 className="project-item__headline">{name}</h3>
  </StyledProjectItem>
);

ProjectItem.propTypes = {
  data: propTypes.shape(propTypes.oneOfType([propTypes.string, propTypes.shape])),
  onClick: propTypes.func.isRequired,
};

ProjectItem.defaultProps = {
  data: {},
};

export default ProjectItem;
