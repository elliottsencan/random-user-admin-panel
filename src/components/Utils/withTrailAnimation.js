import React, { Component } from 'react';
import { Trail, animated } from 'react-spring'

const withTrailAnimation = ( Target ) => {
  return class extends Component {

    renderTrailAnimation( items ) {
      return ( <Trail
        from={{
          opacity: 0
        }}
        to={{
          opacity: 1
        }}
        native={true}
        keys={items.map( ( item, index ) => index )}
        enter={{
          opacity: 1
        }}
        leave={{
          opacity: 0
        }}>
        {
          items.map( item => styles => <animated.div style={{
              ...styles
            }}>{item}</animated.div> )
        }
      </Trail> )
    }

    render() {
      return ( <Target {...this.props} renderTrailAnimation={this.renderTrailAnimation}/> );
    }
  }
};
export default withTrailAnimation;