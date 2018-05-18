import React from 'react';
import omit from 'lodash/omit';
import PropTypes from 'prop-types';
import './Button.css';

const PROPS_BLACKLIST = [ 'size', 'display' ];

/**
 * Generic button component
 *
 * Gives some basic size choices and encapsulates linear gradient background styles.
 */
const Button = ( props ) => {
  return ( <button className={`base-button
    ${ props.display} ${ props.size }`} {...omit(props, PROPS_BLACKLIST)}>{props.text}</button> )
}

Button.propTypes = {
  size: PropTypes.oneOf( [ 'small', 'medium', 'large' ] ),
  display: PropTypes.oneOf( [ 'primary', 'danger', 'success' ] )
};

Button.defaultProps = {
  size: 'medium',
  display: 'primary'
};

export default Button;