import React from 'react';
import omit from 'lodash/omit';
import './Button.css';

const PROPS_BLACKLIST = [ 'gradients', 'text', 'style' ];
const Button = ( props ) => {
  return ( <button
    className={`base-button
    ${ props.display} ${ props.size }`}
    style={{
      ...props.style
    }}
    {...omit(props, PROPS_BLACKLIST)}>{props.text}</button> )
}

export default Button;