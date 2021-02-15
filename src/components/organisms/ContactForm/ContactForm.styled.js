import styled from 'styled-components';
import device from '../../../style/breakpoints';

const StyledContactForm = styled.form`
  width: 100%;
  position: relative;

  @media ${device.laptopM} {
    width: 500px;
    margin-left: 150px;
    margin-top: 100px;
  }

  & label {
    color: var(--primaryColor);
    font: 2.6rem Inconsolata, monospace;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  & *:focus {
    outline: none;
  }

  & button {
    margin-top: 10px;
    color: var(--secondaryColor);
    font-size: 3rem;
    font: 2.6rem Inconsolata, monospace;
    margin-left: auto;
    width: 100%;
    text-align: right;
  }

  & textarea,
  & input {
    width: 100%;
    background: var(--darkerBgColor);
    border: none;
    border-bottom: solid 3px var(--primaryColor);
    font-size: 2rem;
    color: var(--secondaryColor);
    padding: 10px 15px;
    margin-top: 8px;
  }

  & textarea {
    min-height: 200px;

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
`;
export default StyledContactForm;
