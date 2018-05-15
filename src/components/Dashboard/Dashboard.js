import React, {Component} from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
	render() {
		return (
			<pre>
				 <code>
					 {JSON.stringify(this.props.userData, null, 2)}
				 </code>
			 </pre>
		);
	}
}

function mapStateToProps({ user }) {
  return { userData: user };
}

export default connect(mapStateToProps)(Dashboard);