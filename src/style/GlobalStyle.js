import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Montserrat', sans-serif;
    }

    html,
    body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
    }

    button {
        cursor: pointer;
        padding: 0;
        border: none;
        outline: none;
        background: transparent;

        &:hover {
            border: none;
            outline: none;
        }
    }


`;

export default GlobalStyle;
