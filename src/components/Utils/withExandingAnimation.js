import React, { Component } from 'react';
const animationStyle = {
  transition: 'width 0.25s ease'
};
const withExandingAnimation = ( Target ) => {
  return class extends Component {
    constructor( props ) {
      super( props );
      this.state = {
        isOpen: false
      };
    }

    onClick = () => {
      this.setState( {
        isOpen: !this.state.isOpen
      } );
    };

    render() {
      return ( <Target
        {...this.props}
        isOpen={this.state.isOpen}
        onClick={this.onClick}
        additionalStyles={{
          text: animationStyle,
          frame: animationStyle
        }}/> );
    }
  }
};
export default withExandingAnimation;