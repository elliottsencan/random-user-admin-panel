import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {Main} from '../components/Main/Main';
import {withRouter} from "react-router-dom";
import {Navigation} from '../components/Navigation/Navigation';

class Home extends Component {

	componentWillMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<Fragment>
			<header>
 				<h1>My Dashboard</h1>
 				<h2>Welcome to Otis payment portal</h2>
 		</header>
		<div>
	 <Navigation />
	 <Main />
	 </div>
			</Fragment>
		)
	}
}

function mapStateToProps({ user }) {
  return { userData: user };
}

//TODO: fix this HOC nonsense
export default withRouter(connect(mapStateToProps, actions)(Home));

