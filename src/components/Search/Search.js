import React from 'react';
import { TextField, IconButton } from 'material-ui'
import ActionSearchIcon from 'material-ui/svg-icons/action/search';
import withExandingAnimation from '../Utils/withExandingAnimation';

const baseStyles = {
  open: {
    width: 150
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
    top: 10,
    color: 'white'
  },
  frame: {
    display: 'flex',
    marginLeft: 'auto'
  },
  input: {
    color: 'white'
  },
  hint: {
    color: 'rgba(255,255,255,.4)'
  }
};

/**
 * Collapsing Search Box UI Component
 */
const Search = ( props ) => {

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
    <IconButton
      iconStyle={{
        ...baseStyles.icon,
        ...props.iconStyle
      }}
      style={{
        padding: '0'
      }}
      onClick={() => props.onClick()}>
      <ActionSearchIcon/>
    </IconButton>
    <TextField name='search' style={textStyle} inputStyle={baseStyles.input}/>
  </div> );
};

Search.displayName = 'Search';

export default withExandingAnimation( Search );