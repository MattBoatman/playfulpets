import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainWrapper from "./MainWrapper/MainWrapper";
import registerServiceWorker from "./registerServiceWorker";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import "typeface-roboto";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#60ac5d",
      main: "#2e7d32",
      dark: "#004f04",
      contrastText: "#fff"
    },
    secondary: {
      light: "#8e8e8e",
      main: "#616161",
      dark: "#373737",
      contrastText: "#ffffff"
    }
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <MainWrapper />
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
