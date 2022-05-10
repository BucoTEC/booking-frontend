import React, { useState } from "react";

import cl from "./LoginForm.module.scss";

import instance from "../../../../api/axiosInstance";
import axios from "axios";

function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const emailHandler = (e) => {
		setEmail(e.target.value);
	};

	const passwordHandler = (e) => {
		setPassword(e.target.value);
	};

	const submitHandler = async () => {
		try {
			const res = await axios.post("http://localhost:5000/api/auth/login", {
				email,
				password,
			});
			console.log(res.data);
		} catch (error) {
			console.log(error);
		}

		// setEmail("");
		// setPassword("");
	};
	return (
		<div className={cl.input_wrapper}>
			<h1 className={cl.header}>Login</h1>

			<input
				type="email"
				name="email"
				placeholder="email"
				value={email}
				onChange={emailHandler}
				required
				min="3"
			/>
			<input
				type="password"
				name="password"
				placeholder="password"
				value={password}
				onChange={passwordHandler}
				required
				min="3"
			/>
			<button onClick={submitHandler}>Login</button>
		</div>
	);
}

export default LoginForm;
