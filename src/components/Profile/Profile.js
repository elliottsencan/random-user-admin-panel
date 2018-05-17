import React, { Component } from 'react';
import './Profile.css';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class Profile extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      sms: 2
    };
  }

  componentWillReceiveProps( nextProps ) {
    if ( isEmpty( nextProps.userData ) ) {
      return;
    }
    const cell = get( nextProps, 'userData.results.0.cell' );
    const email = get( nextProps, 'userData.results.0.email' );
    const city = get( nextProps, 'userData.results.0.location.city' );
    const state = get( nextProps, 'userData.results.0.location.state' );
    const password = get( nextProps, 'userData.results.0.login.password' );
    this.setState( { cell, email, location: `${ city}, ${ state }`, password } )
  }

  render() {
    const profileImgSrc = get( this.props, 'userData.results.0.picture.large', '' )
    const coverImgSrc = `url(${ profileImgSrc })`;

    return ( <section className="profile-card">
      <div className="cover">
        <div className="content">
          <h2>My profile</h2>
          <p>Last Login: 24 Sep 2017, 13:56</p>
          <p>Macbook pro, {this.state.location}</p>
        </div>
        <img className="profile-picture" src={profileImgSrc} alt=""/>
        <div className="image" style={{
            backgroundImage: coverImgSrc
          }}></div>
      </div>
      <div className="body">
        <form>
          <div className='form-flex'>
            <div className='form-column'>
              <TextField className='form-field' hintText="Email" {...inputStyles} value={this.state.email}/>
              <TextField className='form-field' hintText="Location" {...inputStyles} value={this.state.location}/>
              <DropDownMenu {...selectStyle} value={this.state.sms} onChange={this.handleChange}>
                <MenuItem value={1} primaryText="SMS alerts activated"/>
                <MenuItem value={2} primaryText="SMS alerts deactivated"/>
              </DropDownMenu>
            </div>
            <div className='form-column'>
              <TextField className='form-field' hintText="Phone Number" {...inputStyles} value={this.state.cell}/>
              <TextField className='form-field' hintText="Password" {...inputStyles} type="password" value={this.state.password}/>
            </div>
          </div>
          <div className='form-footer'>
            <RaisedButton type="submit" label="Save"/>
          </div>
        </form>
      </div>
    </section> );
  }
}
const inputStyles = {
  hintStyle: {
    color: '#fff'
  },
  inputStyle: {
    color: '#fff'
  }
};

const selectStyle = {
  autoWidth: false,
  style: {
    width: '100%'
  }
}