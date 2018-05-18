import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import ActionTrendingUp from 'material-ui/svg-icons/action/trending-up';
import ActionPermIdentity from 'material-ui/svg-icons/action/perm-identity';
import ActionAssessment from 'material-ui/svg-icons/action/assessment';

/**
 * Contains application routes
 */
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
        <NavLink to="/bills"><ActionAssessment className="nav-icon"/>Bills</NavLink>
      </li>
    </ul>
  </nav>
</aside> );

Navigation.displayName = 'Navigation';

export default Navigation;
