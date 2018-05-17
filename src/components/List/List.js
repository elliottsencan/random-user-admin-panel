import React, { Fragment, Component } from 'react';
import Button from '../Button/Button';
import Search from '../Search/Search';
import Popover from '../Popover/Popover';
import './List.css';

//render prop candidate
export default class List extends Component {
  render() {
    return ( <section className="list">
      <header>
        <h4>{this.props.title}</h4>
        <div className="search-bar">
          <Search/>
        </div>
        <div className="filter-control">
          <Popover
            items={[
              {
                text: 'Number'
              }, {
                text: 'State'
              }
            ]}
            label="Filter By"/></div>
      </header>
      <table>
        <tbody>
          {
            this.props.data.map( item => {
              return ( <Fragment>
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