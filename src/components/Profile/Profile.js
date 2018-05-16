import React from 'react';
import './Profile.css';
import get from 'lodash/get';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export const Profile = (props) => {
	const profileImgSrc = get(props, 'userData.results.0.picture.large', '')
	const coverImgSrc = `url(${profileImgSrc})`;
	const cell = get(props, 'userData.results.0.cell');
	const email = get(props, 'userData.results.0.email');
	const city = get(props, 'userData.results.0.location.city');
	const state = get(props, 'userData.results.0.location.state');
	const password = get(props, 'userData.results.0.login.password');

	return (
		<section className="profile-card">
	    <div className="cover" style={{backgroundImage: coverImgSrc}}></div>
	    <div className="body">
				<img className="profile-picture" src={profileImgSrc} alt=""/>
				<form>
					<div className='form-flex'>
						<div className='form-column'>
						<TextField
								className='form-field'
								hintText="Email"
								{...inputStyles}
								value={email}
							/>
							<TextField
									className='form-field'
									hintText="Location"
									{...inputStyles}
									value={`${city}, ${state}`}
								/>
							</div>
							<div className='form-column'>
								<TextField
										className='form-field'
										hintText="Phone Number"
										{...inputStyles}
										value={cell}
									/>

								<TextField
										className='form-field'
										hintText="Password"
										{...inputStyles}
										type="password"
										value={password}
									/>
								</div>
							</div>
						<div className='form-footer'>
				  		<RaisedButton type="submit" label="Save" />
						</div>
				</form>
	  	</div>
		</section>
	);
}


const inputStyles = {
  hintStyle: {
    color: '#fff',
  },
	inputStyle: {
		color: '#fff',
	},
};

// const buttonStyles = {
// 	buttonStyle: {
// 		borderRadius: '15px',
// 		backgroundColor: 'pink',
// 		overflow:'hidden',
// 		color: 'white'
// 	}
//
// };