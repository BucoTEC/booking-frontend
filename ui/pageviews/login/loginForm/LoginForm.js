import React from "react";

import cl from "./LoginForm.module.scss";

function LoginForm() {
	return (
		<div className={cl.input - wrapper}>
			<div className={cl.header}>LoginForm</div>
			<p>this is the login fomre</p>

			<input type="email" name="email" />
			<input type="password" name="password" />
		</div>
	);
}

export default LoginForm;
