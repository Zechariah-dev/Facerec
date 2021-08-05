import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import "./index.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#FF856D",
      main: "#FF6246",
    },
    secondary: {
      main: "#073567",
    },
    text: {
      primary: "#455262",
      secondary: "#000E1F",
    },
  },
  typography: {
    fontFamily: ["Manrope", "sans-serif"].join(","),
    fontSize: "18px",
  },
});

const customTheme = responsiveFontSizes(theme);

ReactDOM.render(
  <ThemeProvider theme={customTheme}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
