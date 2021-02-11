import React, { useState, useEffect } from "react";
import ProjectWindow from "../components/organisms/ProjectWindow/ProjectWindow";
import ProjectsWrapper from "../components/organisms/ProjectWrapper/ProjectsWrapper";

const ProjectsPage = () => {
  const [isWindowActive, setWindowActive] = useState(false);

  return (
    <>
      <ProjectsWrapper
        setWindowActive={setWindowActive}
        isWindowActive={isWindowActive}
      />
      <ProjectWindow
        setWindowActive={setWindowActive}
        isWindowActive={isWindowActive}
      />
    </>
  );
};

export default ProjectsPage;
