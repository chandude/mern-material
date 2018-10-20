import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
});

class App extends Component {


  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <div className="App">
          <NavBar></NavBar>

        <h1>hello</h1>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
