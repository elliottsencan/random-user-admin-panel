import React, { Fragment, Component } from 'react';
import Button from '../Button/Button';
import Search from '../Search/Search';
import Popover from '../Popover/Popover';
import './List.css';
import isNull from 'lodash/isNull';

export default class List extends Component {

  constructor( props ) {
    super( props );

    this.state = {
      data: this.props.data
    };
  }

  filterBy = ( item ) => {
    if ( isNull( item.value ) ) {
      return this.setState( { data: this.props.data } )
    }
    const data = this.props.data.filter( data => data[ item.key ].replace( / /g, "" ).toLowerCase() === item.value.replace( / /g, "" ).toLowerCase() );
    this.setState( { data } );
  }

  render() {
    return ( <section className="list">
      <header>
        <h4>{this.props.title}</h4>
        <div className="search-bar">
          <Search/>
        </div>
        <div className="filter-control">
          <Popover items={this.props.filterBy} onChangeHandler={this.filterBy.bind( this )} label="Filter By"/></div>
      </header>
      <table>
        <tbody>
          {
            this.state.data.map( item => {
              return ( <Fragment key={item.text}>
                <tr className={item.active
                    ? 'active'
                    : ''}>
                  <td>{item.text}</td>
                  <td rowSpan="2" className="button-data-cell">
                    <Button {...item.button}/> {item.buttonSubtext && <div className="button-subtext-cell">{item.buttonSubtext}</div>}
                  </td>
                </tr>
                <tr className={item.active
                    ? 'active'
                    : ''}>
                  <td className="subtext-data-cell">{item.subtext}</td>
                </tr>
              </Fragment> );
            } )
          }
        </tbody>
      </table>
    </section> );
  }
}