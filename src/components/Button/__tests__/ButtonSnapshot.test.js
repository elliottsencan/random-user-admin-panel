import React from 'react';
import Button from '../Button';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure( { adapter: new Adapter() } );

it( 'renders correctly', () => {
  const tree = toJson( shallow( <Button/> ) );
  expect( tree ).toMatchSnapshot();
} );