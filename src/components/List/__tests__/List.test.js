import React from 'react';
import List from '../List';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure( { adapter: new Adapter() } );

describe( 'Component: Lists', () => {

  it( 'should filter data', () => {
    const props = {
      data: [
        {
          'test': '1'
        }, {
          'test': '1'
        }, {
          'test': '1'
        }, {
          'test': '2'
        }
      ]
    };

    const testItem = {
      key: 'test',
      value: '1'
    };

    const wrapper = shallow( <List {...props}/> );
    expect( wrapper.state( 'data' ) ).toEqual( props.data );

    wrapper.instance().filterBy( testItem );
    expect( wrapper.state( 'data' ).length ).toBe( 3 );
  } );

  it( 'should reset filters data when no item passed in', () => {
    const props = {
      data: [
        {
          'test': '1'
        }, {
          'test': '1'
        }, {
          'test': '1'
        }, {
          'test': '2'
        }
      ]
    };

    const testItem = {
      key: 'test',
      value: '1'
    };

    const wrapper = shallow( <List {...props}/> );
    expect( wrapper.state( 'data' ) ).toEqual( props.data );

    wrapper.instance().filterBy( testItem );
    wrapper.instance().filterBy();
    expect( wrapper.state( 'data' ).length ).toBe( 4 );
  } );

  it( 'should reset filters data when no item with no value passed in', () => {
    const props = {
      data: [
        {
          'test': '1'
        }, {
          'test': '1'
        }, {
          'test': '1'
        }, {
          'test': '2'
        }
      ]
    };

    const testItem = {
      key: 'test'
    };

    const wrapper = shallow( <List {...props}/> );
    expect( wrapper.state( 'data' ) ).toEqual( props.data );

    wrapper.instance().filterBy( testItem );
    wrapper.instance().filterBy();
    expect( wrapper.state( 'data' ).length ).toBe( 4 );
  } );

} );