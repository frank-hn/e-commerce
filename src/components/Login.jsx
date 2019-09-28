import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import '../styles/css/login.css';
import NavBar from './common/navBar';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Fragment>
				<NavBar />
					<div className="login-title">
						<p>Login for better experience</p>
					</div>
				<div className="login-section">

					<form className='login-form'>
						<div class="container">
							<label for="uname">
								<b>Username</b>
							</label>
							<input
								className="login-inputs"
								type="text"
								placeholder="Enter Username"
								name="uname"
								required
							/>

							<label for="psw">
								<b>Password</b>
							</label>
							<input
								className="login-inputs"
								type="password"
								placeholder="Enter Password"
								name="psw"
								required
							/>

							<button className="login-btn" type="submit">
								Login
							</button>
							<label>
								<span className='create-account'>
									don't have account <Link to="/signup">create one</Link>
								</span>
							</label>
						</div>
					</form>
				</div>
			</Fragment>
		);
	}
}

export default Login;
