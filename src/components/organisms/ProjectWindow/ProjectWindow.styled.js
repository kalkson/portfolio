import styled from 'styled-components';
import device from '../../../style/breakpoints';

const StyledProjectWindow = styled.section`
  position: relative;
  left: 280px;
  display: flex;
  flex-direction: column;
  height: 100%;
  display: ${({ isWindowActive }) => (isWindowActive ? 'block' : 'none')};
  opacity: 0;

  transition: transform 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: ${({ isWindowActive }) => (isWindowActive ? 'translate(-280px)' : 'translateX(0)')};

  animation: project-window-appear 0.2s ease 0.1s forwards;

  @keyframes project-window-appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media ${device.tablet} {
    padding-left: 50px;
  }

  .project__return-button {
    display: ${({ isWindowActive }) => (isWindowActive ? 'flex' : 'none')};

    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: var(--primaryColor);
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    left: -20px;
    top: calc(50% - 20px);
    cursor: pointer;
    opacity: 0;

    animation: window-button-appear 0.4s ease 0.3s forwards;

    @keyframes window-button-appear {
      0% {
        opacity: 0;
        transform: scale(2);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
`;

export default StyledProjectWindow;
