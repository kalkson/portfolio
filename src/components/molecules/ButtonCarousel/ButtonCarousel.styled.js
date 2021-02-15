import styled from 'styled-components';
import device from '../../../style/breakpoints';

const StyledButtonCarousel = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: transform 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: absolute;
  top: 130px;
  left: -82px;

  @media (min-width: 375px) {
    left: -100px;
  }

  @media ${device.mobile} {
    top: 160px;
    left: -112px;
  }

  @media ${device.tablet} {
    margin-right: 120px;
    align-self: auto;
    top: 400px;
    width: 300px;
    left: 100px;
  }

  .carousel {
    &__point {
      width: 10px;
      height: 10px;
      border-radius: 10px;
      background: var(--primaryColor);
      position: relative;
    }

    &__arrow,
    &__addnotation {
      display: ${({ isAddnotationVisible }) => (isAddnotationVisible ? 'inline-block' : 'none')};

      @media ${device.tablet} {
        display: none;
      }
    }

    &__arrow {
      position: absolute;
      left: 85%;
      top: -66px;
      transform: scale(0.55) rotate(10deg);
    }

    &__addnotation {
      position: absolute;
      top: -17px;
      font-size: 1.1rem;
      color: var(--secondaryColor);
      left: 100%;
    }
  }

  & > button {
    opacity: 0;

    @media ${device.tablet} {
      opacity: 0.5;
    }
  }

  & > button:nth-of-type(1) {
    transform-origin: left;
    transform: translate(35px);
  }

  & > button:nth-of-type(2) {
    transform-origin: left;
    transform: rotate(120deg) translate(0, -15px);
  }

  & > button:nth-of-type(3) {
    transform-origin: left;
    transform: rotate(240deg) translate(-6px, 30px);
  }

  @media ${device.tablet} {
    & > button:nth-of-type(1) {
      transform-origin: left;
      transform: translate(50px);
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
  }
`;

export default StyledButtonCarousel;
