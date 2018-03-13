import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import 'typeface-roboto';
import Services from './Services/Services';
import PlayfulToolbar from './PlayfulToolbar/PlayfulToolbar';
import App from './App'




const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#60ac5d',
      main: '#2e7d32',
      dark: '#004f04',
      contrastText: '#fff',
    },
    secondary: {
      light: '#8e8e8e',
      main: '#616161',
      dark: '#373737',
      contrastText: '#ffffff',
    },
  },
});



ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Router>
      <div >
        <PlayfulToolbar />
        <Route exact path="/" component={App} />
        <Route path="/services" component={Services} />
      </div>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
