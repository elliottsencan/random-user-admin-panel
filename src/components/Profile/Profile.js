import React, { Component } from 'react';
import './Profile.css';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import TextField from 'material-ui/TextField';
import Button from '../Button/Button';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import withLoader from '../Utils/withLoader/withLoader';
/**
 * UI Component
 * Consists of Cover Photo and dummy form
 * Accepts the raw userData model from Redux
 * @type {Object}
 */
class Profile extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      cell: '',
      email: '',
      location: '',
      password: '',
      sms: 2,
      imageLoading: false
    };
  }

  handleImageLoaded = () => {
    this.setState( { imageLoading: false } );
  }

  componentWillMount() {
    this.setProfileState( this.props );
  }

  componentWillReceiveProps( nextProps ) {
    if ( !isEqual( nextProps.userData.results, this.props.userData.results ) ) {
      this.setProfileState( nextProps, true );
    }
  }

  setProfileState( props, imageLoading = false ) {
    const cell = get( props, 'userData.results.0.cell', '' );
    const email = get( props, 'userData.results.0.email', '' );
    const city = get( props, 'userData.results.0.location.city', '' );
    const state = get( props, 'userData.results.0.location.state', '' );
    const password = get( props, 'userData.results.0.login.password', '' );
    this.setState( { cell, email, location: `${ city}, ${ state }`, password, imageLoading } );
  }

  handleInputChange = ( event ) => {
    const target = event.target;
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value;
    const name = target.name;

    this.setState( { [ name ]: value } );
  }

  onSubmitHandler( evt ) {
    evt.preventDefault();
  }

  render() {
    const profileImgSrc = get( this.props, 'userData.results.0.picture.large', '' );
    const coverImgSrc = `url(${ profileImgSrc })`;
    const isLoading = get( this.props, 'userData.loading', false ) || this.state.imageLoading;
    const loadingClass = isLoading
      ? 'loading'
      : '';

    return ( <section className={`profile-card flex-animate ${ loadingClass }`}>
      <div className="loading-container">
        {this.props.renderLoader()}
      </div>
      <div className="cover">
        <div className="content">
          <h2>My profile</h2>
          <p>Last Login: 24 Sep 2017, 13:56</p>
          <p className="capitalize">Macbook pro, {this.state.location}</p>
        </div>
        <img className="profile-picture" src={profileImgSrc} alt="" onLoad={this.handleImageLoaded.bind( this )}/>
        <div className="image" style={{
            backgroundImage: coverImgSrc
          }}></div>
      </div>
      <div className="body">
        <form onSubmit={this.onSubmitHandler}>
          <div className='form-flex'>
            <div className='form-column'>
              <TextField
                className='form-field'
                hintText="Email"
                name="email"
                autoComplete='email'
                {...inputStyles}
                value={this.state.email}
                onChange={this.handleInputChange}/>
              <TextField
                className='form-field'
                hintText="Location"
                name="location"
                {...inputStyles}
                value={this.state.location}
                onChange={this.handleInputChange}/>
              <DropDownMenu {...selectStyle} value={this.state.sms} onChange={this.handleInputChange}>
                <MenuItem value={1} name="sms" primaryText="SMS alerts activated"/>
                <MenuItem value={2} name="sms" primaryText="SMS alerts deactivated"/>
              </DropDownMenu>
            </div>
            <div className='form-column'>
              <TextField
                className='form-field'
                hintText="Phone Number"
                autoComplete='tel-national'
                name="cell"
                {...inputStyles}
                value={this.state.cell}
                onChange={this.handleInputChange}/>
              <TextField
                className='form-field'
                hintText="Password"
                name="password"
                autoComplete="current-password"
                {...inputStyles}
                type="password"
                value={this.state.password}
                onChange={this.handleInputChange}/>
            </div>
          </div>
          <div className='form-footer'>
            <Button display='primary' type="submit" text="Save"/>
          </div>
        </form>
      </div>
    </section> );
  }
}

export default withLoader( Profile );

const inputStyles = {
  hintStyle: {
    color: '#fff'
  },
  inputStyle: {
    color: '#fff'
  }
};

const selectStyle = {
  autoWidth: true,
  style: {
    width: '100%',
    maxWidth: '250px'
  },
  menuStyle: {
    background: '#2A2E3A'
  },
  menuItemStyle: {
    color: 'white'
  },
  underlineStyle: {
    bottom: '-10px',
    borderColor: 'green',
    margin: 0
  },
  labelStyle: {
    paddingLeft: '0',
    paddingRight: '0',
    color: 'white'
  },
  iconStyle: {
    right: 0
  }
};