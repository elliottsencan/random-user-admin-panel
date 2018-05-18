import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Main.css';

import Dashboard from '../../containers/Dashboard/Dashboard';
import Accounts from '../../containers/Accounts/Accounts';
import { Mobile } from '../../containers/Mobile/Mobile';
import Bills from '../../containers/Bills/Bills';
import { Complaints } from '../../containers/Complaints/Complaints';
import { CustomerCare } from '../../containers/CustomerCare/CustomerCare';

export const Main = () => ( <main>
  <Switch>
    <Route exact={true} path="/" component={Dashboard}/>
    <Route exact={true} path="/accounts" component={Accounts}/>
    <Route exact={true} path="/mobile" component={Mobile}/>
    <Route exact={true} path="/bills" component={Bills}/>
    <Route exact={true} path="/complaints" component={Complaints}/>
    <Route exact={true} path="/customer-care" component={CustomerCare}/>
  </Switch>
</main> );