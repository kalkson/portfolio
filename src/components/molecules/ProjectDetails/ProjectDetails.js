import React, { useEffect, useRef } from 'react';
import GatsbyImage from 'gatsby-image';
import gsap from 'gsap';
import propTypes from 'prop-types';
import StyledProjectDetails from './ProjectDetails.styled';
import GithubIcon from '../../../assets/icons/github.svg';
import WebsiteIcon from '../../../assets/icons/website.svg';

const ProjectDetails = ({ data: { name, description, fluid, github, url } }) => {
  const descriptionElement = useRef(null);
  const headline = useRef(null);
  const anchors = useRef(null);

  useEffect(() => {
    descriptionElement.current.innerHTML = description;

    const timeline = gsap.timeline({ delay: 0.5 });

    console.log(headline.current);
    timeline.fromTo(headline.current, { x: '200', opacity: 0 }, { x: '0', opacity: 1, duration: 0.2 });
    timeline.fromTo(descriptionElement.current, { x: '200', opacity: 0 }, { x: '0', opacity: 1, duration: 0.2 });
    timeline.fromTo(anchors.current, { x: '200', opacity: 0 }, { x: '0', opacity: 1, duration: 0.2 });

    timeline.play();
  });

  return (
    <StyledProjectDetails className="project__details">
      <div className="project__details__content">
        <h2 className="project__details__content__headline" ref={headline}>
          {name}
        </h2>
        <p className="project__details__content__paragraph" ref={descriptionElement}>
          {description}
        </p>
      </div>
      <GatsbyImage fluid={fluid} className="project__details__image" />
      {(github || url) && (
        <div className="project__details__anchors" ref={anchors}>
          {github && (
            <a href={github}>
              <GithubIcon />
            </a>
          )}
          {url && (
            <a href={url}>
              <WebsiteIcon />
            </a>
          )}
        </div>
      )}
    </StyledProjectDetails>
  );
};

ProjectDetails.propTypes = {
  data: propTypes.shape({
    name: propTypes.string.isRequired,
    fluid: propTypes.shape,
    description: propTypes.string.isRequired,
    github: propTypes.string,
    url: propTypes.string,
  }),
};

ProjectDetails.defaultProps = {
  data: {
    github: null,
    url: null,
  },
};

export default ProjectDetails;
