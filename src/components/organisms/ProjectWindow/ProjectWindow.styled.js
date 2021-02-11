import styled from "styled-components";
import device from "../../../style/breakpoints";

const StyledProjectWindow = styled.section`
  position: relative;
  left: 280px;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media ${device.tablet} {
    padding-left: 50px;
  }

  transition: transform 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  transform: ${({ isWindowActive }) =>
    isWindowActive ? "translate(-280px)" : "translateX(0)"};

  h1 {
    /* font-size: 6rem; */
    margin-top: auto;
    margin-bottom: 60px;

    @media ${device.tablet} {
      margin-bottom: 0;
    }
  }
`;

export default StyledProjectWindow;
