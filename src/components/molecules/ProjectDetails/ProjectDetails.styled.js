import styled from "styled-components";
import device from "../../../style/breakpoints";

const StyledProjectDetails = styled.div`
  background: var(--darkerBgColor);
  border: solid 1px var(--primaryColor);
  max-width: 1110px;
  max-height: 550px;
  padding: 30px 30px 80px 31px;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  height: 80vh;

  @media ${device.tablet} {
    padding: 40px 0 80px 51px;
    height: 490px;
    flex-direction: row;
  }

  @media ${device.desktop} {
    padding: 115px 0 115px 51px;
    height: 620px;
  }

  .project {
    &__details {
      &__content {
        color: var(--secondaryColor);
        max-width: 500px;

        &__headline {
          font-family: Inconsolata, monospace;
        }

        &__paragraph {
          max-height: 225px;
          overflow-y: scroll;
          padding-right: 20px;

          @media ${device.tablet} {
            max-height: 300px;
          }

          @media ${device.desktop} {
            max-height: 250px;
          }

          ::-webkit-scrollbar {
            width: 3px;
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
          }
        }
      }

      &__image {
        position: relative;

        height: 150px;
        width: 250px;
        right: 50px;

        @media ${device.tablet} {
          height: 30%;
          width: auto;
          margin-left: 50px;
          right: 0;
        }
        @media ${device.laptopM} {
          height: 60%;
        }
        @media ${device.laptopL} {
          height: 100%;
          left: 100px;
          margin-left: 0;
        }
      }
    }
  }
`;

export default StyledProjectDetails;
