import styled from "styled-components";
import device from "../../../style/breakpoints";

const StyledHeadline = styled.h1`
  font-family: Inconsoloata, monospace;
  font-size: 4.2rem;
  color: #4b4b44;
  text-shadow: 3px 3px var(--primaryColor);
  margin: 0;
  width: fit-content;

  @media ${device.tablet} {
    font-size: 10rem;
  }
`;

export default StyledHeadline;
