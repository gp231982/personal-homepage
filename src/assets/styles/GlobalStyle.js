import { createGlobalStyle } from "styled-components";
import { theme } from "./themes/theme";

const { breakPoints, colors } = theme;

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: "Poppins", sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        margin: 0px;
        padding: 0 32px;
        max-width: 1216px;
        width:100%;
        margin:0 auto;

        @media(max-width:${breakPoints.sm}){
            padding:0 16px;
        }
        
    }

`;
