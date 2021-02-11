import styled from "styled-components";
import device from "../../../style/breakpoints";

const StyledAboutTile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > * {
    opacity: 0;
  }

  @media ${device.tablet} {
    width: 560px;
    margin-left: 400px;
  }

  .about {
    &__tile {
      &__headline {
        display: flex;
        align-items: center;
        width: 100%;
        border-bottom: solid 2px var(--primaryColor);
        color: var(--primaryColor);
        font-family: Inconsolata, monospace;

        &__square {
          width: 9px;
          height: 9px;
          border: solid 2px var(--primaryColor);
          margin-right: 8px;
        }
      }

      &__content {
        color: var(--secondaryColor);
        font-size: 1.6rem;
        display: flex;
        flex-direction: column;

        &__text {
          color: var(--secondaryColor);
          font-size: 1.6rem;
          display: flex;
          flex-direction: column;
          overflow-y: scroll;
          overflow-x: hidden;
          max-height: 250px;
          padding-right: 20px;

          @media (min-width: 375px) and (min-height: 700px) {
            max-height: 400px;
          }

          @media ${device.tablet} {
            max-height: 300px;
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

          &__icons-wrapper {
            display: grid;
            grid-template-columns: repeat(2, 1fr);

            @media ${device.tablet} {
              grid-template-columns: repeat(3, 1fr);
            }

            &__element {
            }
          }
        }

        &__icons {
          margin: 20px 0 30px auto;

          & svg {
            width: 25px;
            height: 25px;

            @media ${device.tablet} {
              width: auto;
              height: auto;
            }
          }

          & svg:first-child {
            margin-right: 15px;
          }
        }
      }
    }
  }
`;

export default StyledAboutTile;
