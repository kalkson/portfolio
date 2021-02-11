import styled from "styled-components";
import device from "../../../style/breakpoints";

const StyledSkillElement = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 1rem;

  @media ${device.tablet} {
    font-size: 1.6rem;
  }

  & > svg {
    margin-right: 8px;
    width: 30px;
    height: 30px;

    @media ${device.tablet} {
      width: 50px;
      height: 50px;
    }
  }
`;

export default StyledSkillElement;
