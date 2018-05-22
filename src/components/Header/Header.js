import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import get from 'lodash/get';
import * as actions from '../../actions';
import Avatar from 'material-ui/Avatar';
import Popover from '../Popover/Popover';
import Logo from '../Logo/Logo';
import './Header.css';
import HardwareKeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';

/**
 * Connected component that renders Application Title and Dropdown Menu
 * @param {[type]} this.props [description]
 */
class Header extends Component {

  onChangeHandler = () => {
    this.props.refreshUser();
  }

  render() {
    const first = get( this.props, 'userData.results["0"].name.first' );
    const profileImageSrc = get( this.props, 'userData.results.0.picture.medium', '' );

    return ( <header id='header'>
      <Logo/>
      <div className='title'>
        <h1>My dashboard</h1>
        <h2>Welcome to Otis payment portal</h2>
      </div>
      <div className='dropdown'>
        {
          this.props.userData.results && <Fragment>
              <Avatar src={profileImageSrc}/>
              <Popover
                buttonProps={{
                  icon: ( <HardwareKeyboardArrowDown color="white"/> ),
                  labelStyle: {
                    color: 'white',
                    textTransform: 'capitalize'
                  }
                }}
                items={[{
                    text: 'Refresh User',
                    value: 'refresh'
                  }
                ]}
                onChangeHandler={this.onChangeHandler.bind( this )}
                label={`Hello ${ first }`}/>
            </Fragment>
        }
      </div>
    </header> );
  }
}

Header.propTypes = {}

function mapStateToProps( { user } ) {
  return { userData: user };
}

export default connect( mapStateToProps, actions )( Header );
