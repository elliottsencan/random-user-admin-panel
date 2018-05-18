import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import get from 'lodash/get';

import Avatar from 'material-ui/Avatar';
import Popover from '../Popover/Popover';
import Logo from '../Logo/Logo';
import './Header.css';
import HardwareKeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';

const Header = ( props ) => {
  const first = get( props, 'userData.results["0"].name.first' );
  const profileImageSrc = get( props, 'userData.results.0.picture.medium', '' )

  return ( <header id='header'>
    <Logo/>
    <div className='title'>
      <h1>My dashboard</h1>
      <h2>Welcome to Otis payment portal</h2>
    </div>
    <div className='dropdown'>
      {
        props.userData.results && <Fragment>
            <Avatar src={profileImageSrc}/>
            <Popover
              buttonProps={{
                icon: ( <HardwareKeyboardArrowDown color="white"/> ),
                labelStyle: {
                  color: 'white',
                  textTransform: 'capitalize'
                }
              }}
              items={[
                {
                  text: 'Settings'
                }, {
                  text: 'Sign Out'
                }
              ]}
              label={`Hello ${ first }`}/>
          </Fragment>
      }
    </div>
  </header> );
}

function mapStateToProps( { user } ) {
  return { userData: user };
}

export default connect( mapStateToProps )( Header );
