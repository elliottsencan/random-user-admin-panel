import React from 'react';
import Button from '../Button';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure( { adapter: new Adapter() } );

describe( 'Component: Button', () => {

  it( 'should omit blacklisted props', () => {
    const props = {
      display: 'success',
      size: 'small',
      test: true
    };

    const wrapper = shallow( <Button {...props}/> );
    expect( wrapper.prop( 'display' ) ).toBeUndefined();
    expect( wrapper.prop( 'size' ) ).toBeUndefined();
    expect( wrapper.prop( 'test' ) ).toBe( true );

  } );
} );