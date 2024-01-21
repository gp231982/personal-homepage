import ReactDOM from "react-dom";
import React from "react";
import { ThemeProvider } from "styled-components";
import { ModeProvider, useModeContext } from "./assets/styles/ModeContext.js";
import { GlobalStyle } from "./assets/styles/GlobalStyle.js";
import { theme } from "./assets/styles/themes/theme.js";
import App from "./app/App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const ThemedApp = () => {
  const { mode } = useModeContext();

  const themedTheme = {
    ...theme, // zachowujemy pierwotne właściwości tematu
    mode, // dodajemy nową właściwość `mode`
  };

  return (
    <React.StrictMode>
      <ThemeProvider theme={themedTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
};

root.render(
  <ModeProvider>
    <ThemedApp />
  </ModeProvider>
);
