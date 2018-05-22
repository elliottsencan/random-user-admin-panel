import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import isEmpty from 'lodash/isEmpty';

import * as actions from '../../actions';
import { myAccountsData, myBillsData } from '../../constants/dummy_data';
import List from '../../components/List/List';
import Profile from '../../components/Profile/Profile';
import withLoader from '../../components/Utils/withLoader/withLoader';
import withTrailAnimation from '../../components/Utils/withTrailAnimation';
import './Dashboard.css';

class Dashboard extends Component {

  componentWillMount() {
    if ( isEmpty( this.props.userData ) ) {
      this.props.fetchUser();
    }
  }

  render() {
    const loading = isEmpty( this.props.userData );
    if ( loading ) {
      return this.props.renderLoader();
    }

    const items = [ ( <div className="vertical-column">
      <List {...myAccountsData} limit={2}/>
      <List {...myBillsData} limit={2}/>
    </div> ), ( <Profile userData={this.props.userData}/> ) ];

    return ( <div className="dashboard container">
      {this.props.renderTrailAnimation( items )}
    </div> );
  }
}

function mapStateToProps( { user } ) {
  return { userData: user };
}

const wrappedComponent = compose( connect( mapStateToProps, actions ), withLoader, withTrailAnimation )

export default wrappedComponent( Dashboard );