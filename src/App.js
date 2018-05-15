import React, { Component } from 'react';
import Home from './containers/Home';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store'
import './App.css';

class App extends Component {
  render() {
    return ( <Provider store={store}>
			<BrowserRouter>
      	<Home/>
			</BrowserRouter>
    </Provider> );
  }
}

export default App;
