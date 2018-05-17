import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Main.css';

import Dashboard from '../../containers/Dashboard/Dashboard';
import { Accounts } from '../../containers/Accounts/Accounts';
import { Mobile } from '../../containers/Mobile/Mobile';
import { Bills } from '../../containers/Bills/Bills';
import { Complaints } from '../../containers/Complaints/Complaints';
import { CustomerCare } from '../../containers/CustomerCare/CustomerCare';

export const Main = () => ( <main>
  <Switch>
    <Route exact="exact" path="/" component={Dashboard}/>
    <Route exact="exact" path="/accounts" component={Accounts}/>
    <Route exact="exact" path="/mobile" component={Mobile}/>
    <Route exact="exact" path="/bills" component={Bills}/>
    <Route exact="exact" path="/complaints" component={Complaints}/>
    <Route exact="exact" path="/customer-care" component={CustomerCare}/>
  </Switch>
</main> );