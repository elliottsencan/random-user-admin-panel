import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import * as MD from 'react-icons/lib/md';

export const Navigation = () => (
	<aside className='navigation'>
		<nav>
			<ul>
				<li><NavLink to="/" exact={true}><MD.MdTrendingUp />My dashboard</NavLink></li>
				<li><NavLink to="/accounts" ><MD.MdPermIdentity />Accounts</NavLink></li>
				<li><NavLink to="/mobile" ><MD.MdStayPrimaryPortrait />Mobile</NavLink></li>
				<li><NavLink to="/bills" ><MD.MdAssessment />Bills</NavLink></li>
				<li><NavLink to="/complaints" ><MD.MdComment />Complaints</NavLink></li>
				<li><NavLink to="/customer-care" ><MD.MdCall />Customer Care</NavLink></li>
			</ul>
		</nav>
	</aside>
);