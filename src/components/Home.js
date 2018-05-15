import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {
	componentWillMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">

					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		)
	}
}

function mapStateToProps({ user }) {
  return { userData: user };
}

export default connect(mapStateToProps, actions)(Home);

