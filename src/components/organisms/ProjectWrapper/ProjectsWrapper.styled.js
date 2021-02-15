import styled from 'styled-components';
import device from '../../../style/breakpoints';

const StyledProjectsWrapper = styled.div`
  height: 100vh;
  width: fit-content;
  transform: translateX(-100%);
  transition: transform 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: translateX(0);
  overflow-x: hidden;

  z-index: 2;

  transform: ${({ isWindowActive }) => (isWindowActive ? 'translate(-100%)' : 'translate(0)')};

  position: absolute;
  top: 0;
  left: 48px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  direction: rtl;

  ::-webkit-scrollbar {
    width: 5px;
    height: 100px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--darkerBgColor);
    border-radius: 3px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--primaryColor);
    border-radius: 3px;
    box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05);
  }

  @media ${device.tablet} {
    /* width: 300px; */
    left: 87px;
  }
`;

export default StyledProjectsWrapper;
