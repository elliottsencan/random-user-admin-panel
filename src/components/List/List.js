import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Search from '../Search/Search';
import Popover from '../Popover/Popover';
import './List.css';
import isUndefined from 'lodash/isUndefined';
import isEmpty from 'lodash/isEmpty';
import CommunicationClearAll from 'material-ui/svg-icons/communication/clear-all';
/**
 * List Component with filtering and dummy search
 * @type {Object}
 */
export default class List extends Component {

  constructor( props ) {
    super( props );

    this.state = {
      data: this.getDataSubset( this.props.data )
    };
  }

  getDataSubset( data ) {
    return data.slice( 0, this.props.limit )
  }

  renderItem = ( item, index ) => {
    return ( <Fragment key={index}>
      <tr className={item.active
          ? 'active'
          : ''}>
        <td>{item.decorator && <div className={`decorator ${ item.decorator }`}/>}{item.text}</td>
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
  }

  filterBy = ( item ) => {
    if ( isEmpty( item ) || isUndefined( item.value ) ) {
      return this.setState( {
        data: this.getDataSubset( this.props.data )
      } );
    }
    const data = this.props.data.filter( data => data[ item.key ].replace( / /g, "" ).toLowerCase() === item.value.replace( / /g, "" ).toLowerCase() );
    this.setState( { data: this.getDataSubset( data ) } );
  }

  render() {
    return ( <section className="list">
      <header>
        <h4>{this.props.title}</h4>
        <div className="search-bar">
          <Search iconStyle={{
              color: '#8D93A4'
            }}/>
        </div>
        <div className="filter-control">
          <Popover buttonProps={popoverButtonProps} items={this.props.filterBy} onChangeHandler={this.filterBy.bind( this )} label="Filter By"/></div>
      </header>
      <table>
        <tbody>
          {this.state.data.map( this.renderItem )}
        </tbody>
      </table>
    </section> );
  }
}

const popoverButtonProps = {
  labelPosition: "after",
  icon: ( <CommunicationClearAll color="#8D93A4"/> ),
  backgroundColor: '#3A4051',
  labelStyle: {
    color: '#8D93A4',
    textTransform: 'capitalize'
  },
  style: {
    borderRadius: '20px'
  }
};

List.displayName = 'List'

List.defaultProps = {
  data: [],
  filterBy: [],
  limit: 100
};

List.propTypes = {
  data: PropTypes.array,
  filterBy: PropTypes.array,
  limit: PropTypes.number
}