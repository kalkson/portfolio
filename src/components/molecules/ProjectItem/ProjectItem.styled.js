import styled from "styled-components";

const StyledProjectItem = styled.div`
  /* width: 100%; */
  width: fit-content;
  opacity: 0;
  transform: translateX(-200%);

  & > .project-item__image {
    width: 280px;

    & * {
      width: 100%;
    }
  }
`;

export default StyledProjectItem;
