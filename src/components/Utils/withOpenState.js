import React, { Component } from 'react';

/**
 * withOpenState HOC
 * adds UI state and management to Target Component
 * @param  {React} Target UI Component
 * @return {React}        Wrapped Component
 */
const withOpenState = ( Target ) => {
  return class extends Component {
    constructor( props ) {
      super( props );
      this.state = {
        isOpen: false
      };
    }

    onClick = ( event ) => {
      event.preventDefault();
      this.setState( {
        isOpen: !this.state.isOpen,
        anchorEl: event.currentTarget
      } );
    };

    handleRequestClose = () => {
      this.setState( { isOpen: false } );
    };

    render() {
      return ( <Target
        {...this.props}
        isOpen={this.state.isOpen}
        onClick={this.onClick}
        anchorEl={this.state.anchorEl}
        handleRequestClose={this.handleRequestClose}/> );
    }
  }
};
export default withOpenState;