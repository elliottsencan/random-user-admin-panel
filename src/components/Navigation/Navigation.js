import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export const Navigation = () => (
	<aside className='navigation'>
		<nav>
			<ul>
				<li><Link to="/">My dashboard</Link></li>
				<li><Link to="/accounts">Accounts</Link></li>
				<li><Link to="/mobile">Mobile</Link></li>
				<li><Link to="/bills">Bills</Link></li>
				<li><Link to="/complaints">Complaints</Link></li>
				<li><Link to="/customer-care">Customer Care</Link></li>
			</ul>
		</nav>
	</aside>
);