import styled from "styled-components";
import device from "../style/breakpoints";

const StyledMainLayout = styled.main`
  width: calc(100vw - 48px);
  height: 100vh;
  background: var(--bgColor);
  margin-left: 48px;
  padding: 48px 32px 62px 24px;

  @media (min-width: 360px) {
    padding: 80px 77px 124px 42px;
  }

  @media (min-width: 425px) {
    padding: 111px 77px 124px 58px;
  }

  @media ${device.tablet} {
    margin-left: 87px;
    width: calc(100vw - 87px);
  }
`;

export default StyledMainLayout;
