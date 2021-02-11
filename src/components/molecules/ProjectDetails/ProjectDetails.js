import React from "react";
import propTypes from "prop-types";
import StyledProjectDetails from "./ProjectDetails.styled";

const ProjectDetails = () => (
  <StyledProjectDetails className="project__details">
    <div className="project__details__content">
      <h2 className="project__details__content__headline">reactywny.pl</h2>
      <p className="project__details__content__paragraph">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At
        <br />
        <br />
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At voluptua. At
        <br />
        <br />
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At
        <br />
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At
      </p>
    </div>
    <img
      src="https://www.datocms-assets.com/42695/1613048552-obraz2021-02-11140230.png"
      alt="twój start"
      className="project__details__image"
    />
  </StyledProjectDetails>
);

ProjectDetails.propTypes = {};

export default ProjectDetails;
