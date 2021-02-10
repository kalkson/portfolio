import styled from "styled-components";
import device from "../../../style/breakpoints";

const StyledNav = styled.nav`
  width: 48px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  outline: solid 2px var(--darkerBgColor);

  @media ${device.tablet} {
    width: 87px;
  }
`;

export default StyledNav;
