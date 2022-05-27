import React, { useState } from "react";
import cl from "./LoginForm.module.scss";

import useLogin from "../../../../api/calls/auth/useLogin";

function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { isLoading, login } = useLogin({ email, password });

	const loginHandler = () => {
		login();
		setEmail("");
		setPassword("");
	};

	return (
		<div className={cl.input_wrapper}>
			<h1 className={cl.header}>Login</h1>
			{isLoading ? (
				<h1>Loading ...</h1>
			) : (
				<>
					<input
						type="email"
						name="email"
						placeholder="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						min="3"
					/>
					<input
						type="password"
						name="password"
						placeholder="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						required
						min="3"
					/>
					<button onClick={loginHandler}>Login</button>
				</>
			)}
		</div>
	);
}

export default LoginForm;
