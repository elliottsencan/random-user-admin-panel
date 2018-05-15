import React from 'react';
import './Main.css';
import { Route } from 'react-router-dom';

import Dashboard from '../Dashboard/Dashboard';
import {Accounts} from '../Accounts/Accounts';
import {Mobile} from '../Mobile/Mobile';
import {Bills} from '../Bills/Bills';
import {Complaints} from '../Complaints/Complaints';
import {CustomerCare} from '../CustomerCare/CustomerCare';

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