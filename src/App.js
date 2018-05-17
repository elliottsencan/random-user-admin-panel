import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Main } from './components/Main/Main';
import Header from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store';
import './App.css';

class App extends Component {
  render() {
    return ( <Provider store={store}>
      <BrowserRouter>
        <MuiThemeProvider>
          <Fragment>
            <Header/>
            <div>
              <Navigation/>
              <Main/>
            </div>
          </Fragment>
        </MuiThemeProvider>
      </BrowserRouter>
    </Provider> );
  }
}

export default App;
