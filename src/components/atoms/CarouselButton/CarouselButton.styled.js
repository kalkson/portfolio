import styled from "styled-components";

const StyledCarouselButton = styled.button`
  color: var(--secondaryColor);
  text-transform: uppercase;
  position: absolute;
  text-align: right;
  width: fit-content;
  transition: all 200ms linear;
  opacity: 0.4;

  ${({ active }) =>
    active &&
    `
        opacity: 1;
        color: var(--primaryColor)
`};

  ${({ active, activeNumber }) =>
    active &&
    activeNumber === 1 &&
    `
        font-weight: 600;
        transform: translate(80px, 0) !important;
        font-size: 2.5rem;
    `};

  ${({ active, activeNumber }) =>
    active &&
    activeNumber === 2 &&
    `
        font-weight: 600;
        transform: translate(40px, 10px) rotate(120deg) !important;
        font-size: 2.5rem;
    `};

  ${({ active, activeNumber }) =>
    active &&
    activeNumber === 3 &&
    `
        font-weight: 600;
        transform: translate(80px, -10px) rotate(240deg) !important;
        font-size: 2.5rem;
    `};
`;

export default StyledCarouselButton;
