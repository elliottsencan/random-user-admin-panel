import React from 'react';
import withExandingAnimation from '../withExandingAnimation';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure( { adapter: new Adapter() } );

describe( 'HOC: withExandingAnimation', () => {
  let wrapper = null;
  beforeEach( () => {
    const props = {
      text: true,
      test: true
    };
    const Target = withExandingAnimation( ( props ) => ( <div className='test'/> ) );
    wrapper = mount( <Target {...props}/> );
  } );

  it( 'should render target', () => {
    expect( wrapper.find( '.test' ).length ).toEqual( 1 );
  } );

  it( 'should initial state should have isOpen equal false', () => {
    expect( wrapper.state( 'isOpen' ) ).toEqual( false );
  } );

  it( 'toggles state on click', () => {
    const dummyEvent = {
      preventDefault: () => {}
    }
    wrapper.instance().onClick( dummyEvent )
    expect( wrapper.state( 'isOpen' ) ).toEqual( true );
  } );
} );