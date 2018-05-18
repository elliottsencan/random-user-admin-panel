import React from 'react';
import List from '../List';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure( { adapter: new Adapter() } );

it( 'renders correctly', () => {
  const tree = toJson( shallow( <List/> ) );
  expect( tree ).toMatchSnapshot();
} );