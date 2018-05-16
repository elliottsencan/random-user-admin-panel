import React from 'react';
import { Route } from 'react-router-dom';
import './Main.css';

import Dashboard from '../../containers/Dashboard/Dashboard';
import {Accounts} from '../../containers/Accounts/Accounts';
import {Mobile} from '../../containers/Mobile/Mobile';
import {Bills} from '../../containers/Bills/Bills';
import {Complaints} from '../../containers/Complaints/Complaints';
import {CustomerCare} from '../../containers/CustomerCare/CustomerCare';

export const Main = () => (
	<main>
			<Route exact path="/" component={Dashboard} />
			<Route exact path="/accounts" component={Accounts} />
			<Route exact path="/mobile" component={Mobile} />
			<Route exact path="/bills" component={Bills} />
			<Route exact path="/complaints" component={Complaints} />
			<Route exact path="/customer-care" component={CustomerCare} />
	</main>
);