import styled from 'styled-components';

const StyledProjectItem = styled.div`
  /* width: 100%; */
  width: fit-content;
  opacity: 0;
  transform: translateX(-200%);
  cursor: pointer;

  & > .project-item {
    &__image {
      width: 280px;
      box-shadow: inset 0 0 30px 30px #000;
      transition: filter 200ms linear;
      /* filter: drop-shadow(0px -11px 49px black); */
      z-index: 3;
    }

    &__headline {
      color: white;
      position: absolute;
      margin: 0;
      width: 100%;
      text-align: center;
      z-index: 5;
      bottom: 0;
      padding: 0 0 10px 10px;
      text-shadow: 3px 3px 10px black;
    }
  }
`;

export default StyledProjectItem;
