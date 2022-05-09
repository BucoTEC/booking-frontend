import React from "react";

import cl from "./LoginForm.module.scss";

function LoginForm() {
	return (
		<div className={cl.input_wrapper}>
			<h1 className={cl.header}>Login</h1>

			<input type="email" name="email" placeholder="email" />
			<input type="password" name="password" placeholder="password" />
			<button>Login</button>
		</div>
	);
}

export default LoginForm;
