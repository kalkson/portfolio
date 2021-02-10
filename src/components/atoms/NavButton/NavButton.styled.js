import styled from "styled-components";

const StyledNavButton = styled.button`
  width: 100%;
  vertical-align: center;
  text-align: center;
  height: 33.33333vh;
  text-transform: uppercase;
  color: var(--primaryColor);
  position: relative;

  & > .nav__button__background {
    width: 100%;
    height: 100%;
    position: absolute;
    background: var(--darkerBgColor);
    left: 0;
    top: 0;
    z-index: 1;
    transform: translateX(-100%);
    transition: transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  & > span {
    writing-mode: vertical-rl;
    text-orientation: upright;
    font: 2.4rem Inconsolata, monospace;
    letter-spacing: -5px;
    position: relative;
    z-index: 2;
    transition: font-weight 500ms linear;
  }
`;

export default StyledNavButton;
