import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { storageMock } from './utils/localStorageMock';

window.localStorage = storageMock();

it( 'renders without crashing', () => {
  const div = document.createElement( 'div' );
  ReactDOM.render( <App/>, div );
  ReactDOM.unmountComponentAtNode( div );
} );
