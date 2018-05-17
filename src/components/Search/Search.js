import React from 'react';
import { TextField, IconButton } from 'material-ui'
import ActionSearchIcon from 'material-ui/svg-icons/action/search';
import withExandingAnimation from '../Utils/withExandingAnimation';

const SearchBox = ( props ) => {
  const baseStyles = {
    open: {
      width: 200,
      color: 'white'
    },
    closed: {
      width: 0
    },
    smallIcon: {
      width: 30,
      height: 30
    },
    icon: {
      width: 25,
      height: 25,
      padding: 5,
      top: 0,
      color: 'white'
    },
    frame: {}
  };
  const textStyle = props.isOpen
    ? baseStyles.open
    : baseStyles.closed;
  const divStyle = {
    ...textStyle,
    ...baseStyles.frame,
    ...props.additionalStyles.frame
  };
  divStyle.width += baseStyles.icon.width + 5;
  return ( <div style={divStyle}>
    <IconButton iconStyle={baseStyles.icon} style={{
        padding: '0'
      }} onClick={() => props.onClick()}>
      <ActionSearchIcon/>
    </IconButton>
    {
  props.isOpen && <TextField name='search' style={textStyle}/>
}
  </div> );
};

export default withExandingAnimation( SearchBox );