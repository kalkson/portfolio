import styled from "styled-components";
import device from "../style/breakpoints";

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

  /* @media (min-height: 800px) {
    padding: 111px 77px 124px 58px;
  } */
`;

export default StyledMainLayout;
