import styled from 'styled-components';
import device from '../style/breakpoints';

const StyledMainLayout = styled.main`
  width: calc(100vw - 48px);
  height: 100vh;
  background: var(--bgColor);
  margin-left: 48px;
  padding: 20px 32px 20px 24px;

  @media (min-width: 360px) {
    padding: 30px 47px 20px 37px;
  }

  @media (min-width: 425px) {
    padding: 60px 47px 70px 48px;
  }

  @media ${device.tablet} {
    margin-left: 87px;
    width: calc(100vw - 87px);
  }

  @media ${device.desktop} {
    padding: 111px 77px 124px 58px;
  }

  .footer {
    position: absolute;
    font: 1.2rem/1.5rem Inconsolata, monospace;
    color: var(--primaryColor);
    right: 20px;
    bottom: 10px;
    display: flex;
    flex-direction: column;
    text-align: right;
  }

  /* &:after {
    content: '';
    width: 20vw;
    height: 70vh;
    background: var(--primaryColor);
    position: fixed;
    right: 0;
    top: 0;
    transform-origin: top left;
    transform: rotate(-45deg);

    transition: background 300ms linear;

    overflow: visible;
    z-index: 10;
  } */
`;

export default StyledMainLayout;
