import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import ActionTrendingUp from 'material-ui/svg-icons/action/trending-up';
import ActionPermIdentity from 'material-ui/svg-icons/action/perm-identity';
import ActionAssessment from 'material-ui/svg-icons/action/assessment';
import CommunicationStayPrimaryPortrait from 'material-ui/svg-icons/communication/stay-primary-portrait';
import CommunicationComment from 'material-ui/svg-icons/communication/comment';
import CommunicationCall from 'material-ui/svg-icons/communication/call';

const Navigation = () => ( <aside className='navigation'>
  <nav>
    <ul>
      <li>
        <NavLink to="/" exact={true}><ActionTrendingUp className="nav-icon"/>My dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/accounts"><ActionPermIdentity className="nav-icon"/>Accounts</NavLink>
      </li>
      <li>
        <NavLink to="/mobile"><CommunicationStayPrimaryPortrait className="nav-icon"/>Mobile</NavLink>
      </li>
      <li>
        <NavLink to="/bills"><ActionAssessment className="nav-icon"/>Bills</NavLink>
      </li>
      <li>
        <NavLink to="/complaints"><CommunicationComment className="nav-icon"/>Complaints</NavLink>
      </li>
      <li>
        <NavLink to="/customer-care"><CommunicationCall className="nav-icon"/>Customer Care</NavLink>
      </li>
    </ul>
  </nav>
</aside> );

export default Navigation;