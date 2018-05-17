import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import get from 'lodash/get';

import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import HardwareKeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import './Header.css';

class Header extends Component {

  constructor( props ) {
    super( props );

    this.state = {
      open: false
    };
  }

  handleClick = ( event ) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState( { open: true, anchorEl: event.currentTarget } );
  };

  handleRequestClose = () => {
    this.setState( { open: false } );
  };

  render() {
    const first = get( this.props, 'userData.results["0"].name.first' );
    const profileImageSrc = get( this.props, 'userData.results.0.picture.medium', '' )

    return ( <header id='header'>
      <div className='title'>
        <h1>My dashboard</h1>
        <h2>Welcome to Otis payment portal</h2>
      </div>
      <div className='dropdown'>
        {
          this.props.userData.results && <Fragment>
              <Avatar src={profileImageSrc}/>
              <FlatButton
                onClick={this.handleClick}
                labelPosition="before"
                style={{
                  color: 'white'
                }}
                label={`Hello ${ first }`}
                icon={<HardwareKeyboardArrowDown />
}/>
              <Popover
                open={this.state.open}
                anchorEl={this.state.anchorEl}
                anchorOrigin={{
                  horizontal: 'left',
                  vertical: 'bottom'
                }}
                targetOrigin={{
                  horizontal: 'left',
                  vertical: 'top'
                }}
                onRequestClose={this.handleRequestClose}>
                <Menu>
                  <MenuItem primaryText="Refresh"/>
                  <MenuItem primaryText="Help &amp; feedback"/>
                  <MenuItem primaryText="Settings"/>
                  <MenuItem primaryText="Sign out"/>
                </Menu>
              </Popover>
            </Fragment>
        }
      </div>
    </header> );
  }
}

function mapStateToProps( { user } ) {
  return { userData: user };
}

export default connect( mapStateToProps )( Header );
