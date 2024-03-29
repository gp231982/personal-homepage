// import { createGlobalStyle } from "styled-components";
// import { theme } from "./themes/theme";
// import { useModeContext } from "./ModeContext";

// const { breakPoints, colors, duration, timingFunction } = theme;

// export const GlobalStyle = createGlobalStyle`
//     html {
//         box-sizing: border-box;
//         background: ${({ mode }) =>
//           mode === "light" ? colors.white : colors.black};

//     }

//     *, ::after, ::before {
//         box-sizing: inherit;
//     }

//     body {
//         ${"" /* box-sizing: border-box; */}
//         font-family: "Poppins", sans-serif;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         min-height: 100vh;
//         margin: 0px;
//         padding: 0 32px;
//         max-width: 1216px;
//         width:100%;
//         margin:0 auto;
//         transition: background ${duration} ${timingFunction};

//           background: ${({ mode }) =>
//             mode === "light" ? colors.white : colors.black};
//         };

//         @media(max-width:${breakPoints.sm}){
//             padding:0 16px;
//         };
// `;

// GlobalStyle.js

import { createGlobalStyle } from "styled-components";

import { theme } from "./themes/theme";

const { colors, breakPoints, duration, timingFunction } = theme;

export const GlobalStyle = createGlobalStyle`

    html {
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        margin: 0;
        padding: 0 32px;
        max-width: 1216px;
        width: 100%;
        margin: 0 auto;
        background: ${({ theme }) =>
          theme.mode === "light" ? colors.white : colors.nero};

        @media(max-width: ${breakPoints.sm}) {
            padding: 0 16px;
        }
        transition: background ${duration} ${timingFunction};
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }
`;
