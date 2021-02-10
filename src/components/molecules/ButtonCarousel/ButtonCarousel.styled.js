import styled from "styled-components";
import device from "../../../style/breakpoints";

const StyledButtonCarousel = styled.div`
  align-self: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 200px;
  transition: transform 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  right: 75px;
  margin-top: 30px;

  @media ${device.tablet} {
    right: 0;
    align-self: auto;
  }

  .carousel {
    &__point {
      width: 10px;
      height: 10px;
      border-radius: 10px;
      background: var(--primaryColor);
      position: relative;
    }
  }

  & > button:nth-of-type(1) {
    transform-origin: left;
    transform: translate(50px);
  }

  & > button:nth-of-type(2) {
    transform-origin: left;
    transform: rotate(120deg) translate(0, -20px);
  }

  & > button:nth-of-type(3) {
    transform-origin: left;
    transform: rotate(240deg) translate(-10px, 40px);
  }
`;

export default StyledButtonCarousel;
