import React, { Fragment, Component } from 'react';
import withOpenState from '../Utils/withOpenState';
import { default as MaterialPopover } from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

class Popover extends Component {

  onClickHandler = ( item ) => this.props.onChangeHandler( item );

  render() {
    return ( <Fragment>
      <FlatButton onClick={this.props.onClick} labelPosition="before" label={this.props.label} {...this.props.buttonProps}/>
      <MaterialPopover
        open={this.props.isOpen}
        anchorEl={this.props.anchorEl}
        {...popoverStyle}
        anchorOrigin={{
          horizontal: 'left',
          vertical: 'bottom'
        }}
        targetOrigin={{
          horizontal: 'left',
          vertical: 'top'
        }}
        onRequestClose={this.props.handleRequestClose}>
        <Menu {...selectStyle}>
          {( this.props.items || [] ).map( item => ( <MenuItem key={item.text} primaryText={item.text} onClick={() => this.onClickHandler( item )}/> ) )}
        </Menu>
      </MaterialPopover>
    </Fragment> );
  }
}

export default withOpenState( Popover );

const popoverStyle = {
  style: {
    backgroundColor: '#2A2E3A'
  }
};
const selectStyle = {
  style: {
    background: '#2A2E3A'
  },
  innerDivStyle: {
    background: '#2A2E3A'
  },
  menuItemStyle: {
    color: 'white'
  }
};