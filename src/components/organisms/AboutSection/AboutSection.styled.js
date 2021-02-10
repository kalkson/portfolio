import styled from "styled-components";

const StyledAboutSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  .about {
    &__header {
      &__notice {
        font-size: 2.1rem;
        font-family: Inconsolata, monospace;
        color: var(--primaryColor);
        left: 2px;
        position: relative;
      }
    }
  }
`;

export default StyledAboutSection;
