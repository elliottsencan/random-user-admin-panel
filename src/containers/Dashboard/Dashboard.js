import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import {List} from '../../components/List/List';
import {Profile} from '../../components/Profile/Profile';
import './Dashboard.css';

const myAccountsData = {
	title: 'My accounts',
	data: [
		{
			text: '+1-386-575-1232',
			subtext: 'Available',
			onClick: () => {},
			buttonText: 'Edit',
			disabled: false,
		},
		{
			text: '+1-844-699-4678',
			subtext: 'Not Available',
			onClick: () => {},
			buttonText: 'Delete',
			disabled: true,
		},
	]
};

const myBillsData = {
	title: 'My bills',
	data: [
		{
			text: '+1-386-575-1232',
			subtext: 'Patty Francisco',
			onClick: () => {},
			buttonText: '$192',
			buttonSubtext: 'Bill Paid',
			disabled: false,
		},
		{
			text: '+1-549-746-1365',
			subtext: 'Jenee Withey',
			onClick: () => {},
			buttonText: '$144',
			buttonSubtext: 'Bill not paid',
			disabled: false,
		},
	]
};

class Dashboard extends Component {

	componentWillMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<Fragment>
				<div className="vertical-column">
					<List {...myAccountsData} />
					<List {...myBillsData} />
				</div>
				<Profile userData={this.props.userData} />
			</Fragment>
		);
	}
}

function mapStateToProps({ user }) {
  return { userData: user };
}

export default connect(mapStateToProps, actions)(Dashboard);