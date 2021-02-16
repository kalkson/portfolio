import styled from 'styled-components';

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
        transform: translate(80px, -3px) !important;
        font-size: 2.5rem;
        opacity: 1 !important;

        @media (min-width: 768px) {
          transform: translate(85px, -3px) !important;
        }
    `};

  ${({ active, activeNumber }) =>
    active &&
    activeNumber === 2 &&
    `
        font-weight: 600;
        transform: translate(35px, 13px) rotate(120deg) !important;
        font-size: 2.5rem;
        opacity: 1 !important;
        
        @media (min-width: 768px) {
          transform: translate(38px, 14px) rotate(120deg) !important;
        }
    `};

  ${({ active, activeNumber }) =>
    active &&
    activeNumber === 3 &&
    `
        font-weight: 600;
        transform: translate(72px, -15px) rotate(240deg) !important;
        font-size: 2.5rem;
        opacity: 1 !important;

        @media (min-width: 768px) {
          transform: translate(80px, -11px) rotate(240deg) !important;
        }
    `};
`;

export default StyledCarouselButton;
