import React from 'react';
import './login.css'

const Login = () => {
	return (
		<div className="login">
			<div className="loginWrapper">
				<div className="loginLeft">
					<h3 className="loginLogo">Reactsocial</h3>
					<span className="loginDesc">
						Connect with friends and the world around you on Reactsocial.
					</span>
				</div>

				<div className="loginRight">
					<div className="loginBox">
						<input type="text" placeholder="Email" className="loginInput" />
						<input type="text" placeholder="Password" className="loginInput" />
						<button className="loginButton">Log in</button>
						<span className="loginForgot">Forgot password</span>
						<button className="loginRegisterButton">Create a New Account</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login;