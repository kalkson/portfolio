import styled from 'styled-components';
import device from '../../../style/breakpoints';

const StyledProjectDetails = styled.div`
  background: var(--darkerBgColor);
  border: solid 1px var(--primaryColor);
  max-width: 1110px;
  max-height: 550px;
  padding: 30px 30px 80px 31px;
  width: calc(100% + 50px);
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-evenly;
  height: 80vh;

  @media ${device.tablet} {
    padding: 40px 30px 80px 51px;
  }

  @media ${device.laptopM} {
    padding: 40px 0 80px 51px;
    height: 490px;
    flex-direction: row;
    width: 100%;
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
          opacity: 0;
        }

        &__paragraph {
          opacity: 0;
          max-height: 175px;
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

        @media ${device.tablet} {
          height: 50%;
        }
        @media ${device.laptopM} {
          width: 100%;
          height: 85%;
        }
        @media ${device.laptopL} {
          left: 100px;
          margin-left: 0;
        }
        @media ${device.desktop} {
          height: 100%;
        }
      }

      &__anchors {
        position: absolute;
        bottom: 30px;
        opacity: 0;

        & path {
          fill: var(--primaryColor);
        }

        @media ${device.tablet} {
          left: 51px;
        }

        & svg {
          width: 35px;
          height: 35px;
          margin-right: 15px;
        }
      }
    }
  }
`;

export default StyledProjectDetails;
