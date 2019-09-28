import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import '../styles/css/profile.css';
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
			</Fragment>
		);
	}
}

export default Login;
