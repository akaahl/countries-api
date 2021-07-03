import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 425px) {
            font-size: 80%;
        }
    }

    body {
        font-family: 'Nunito Sans', sans-serif;
    }
`;

export default GlobalStyles;
