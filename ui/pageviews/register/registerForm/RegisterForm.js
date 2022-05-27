import React, { useState } from "react";

import cl from "./RegisterForm.module.scss";

import useRegister from "../../../../api/calls/auth/useRegister";

function RegisterForm() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { register, isLoading } = useRegister({ username, email, password });

	const registerHandler = () => {
		register();
	};

	return (
		<div className={cl.input_wrapp}>
			<h1 className={cl.head}>Register</h1>
			{isLoading ? (
				<h1>Loading ...</h1>
			) : (
				<>
					<input
						type="username"
						name="username"
						placeholder="username"
						value={username}
						onChange={(e) => {
							setUsername(e.target.value);
						}}
						required
						min="3"
					/>
					<input
						type="email"
						name="email"
						placeholder="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
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
					<button onClick={registerHandler}>Register</button>
				</>
			)}
		</div>
	);
}

export default RegisterForm;
