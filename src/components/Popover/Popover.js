import React, { Fragment } from 'react';
import withOpenState from '../Utils/withOpenState';
import { default as MaterialPopover } from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import HardwareKeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';

const Popover = ( props ) => {
  return ( <Fragment>
    <FlatButton
      onClick={props.onClick}
      labelPosition="before"
      style={{
        color: 'white',
        textTransform: 'capitalize'
      }}
      label={props.label}
      icon={<HardwareKeyboardArrowDown />
      }
    />
    <MaterialPopover
      open={props.isOpen}
      anchorEl={props.anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom'
      }}
      targetOrigin={{
        horizontal: 'left',
        vertical: 'top'
      }}
      onRequestClose={props.handleRequestClose}>
      <Menu>
        {props.items.map( item => ( <MenuItem primaryText={item.text} onClick={item.onClick}/> ) )}
      </Menu>
    </MaterialPopover>
  </Fragment> );
}

export default withOpenState( Popover );