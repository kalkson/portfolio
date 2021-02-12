import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root {
        --primaryColor: #bbb739;
        --secondaryColor: #cccccc;
        --bgColor: #222222;
        --darkerBgColor: #171515;
        background-color: var(--bgColor);
    }

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
        overflow: hidden;
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

    .active-nav-button {
        & > button {
            
            & > .nav__button__background {
                transform: translateX(0);
            }

            & > span {
                font-weight: 700;
            }
        }
    }

    
  }


`;

export default GlobalStyle;
