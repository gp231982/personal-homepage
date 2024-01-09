import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./app/App.js";
import reportWebVitals from "./reportWebVitals.js";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/themes/theme.js";
import { GlobalStyle } from "./assets/styles/GlobalStyle.js";
// import store from "./store/store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
    </ThemeProvider>
    {/* </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
