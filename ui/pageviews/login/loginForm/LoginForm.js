import React, { useState, useContext } from "react";
import { useRouter } from "next/router";

import { UserContext } from "../../../../context/UserContext";

import cl from "./LoginForm.module.scss";

import instance from "../../../../api/axiosInstance";

function LoginForm() {
	const router = useRouter();
	const { setCurrentUser } = useContext(UserContext);
	const [email, setEmail] = useState("");
	const [isLoading, setIsLoadin] = useState(false);
	// const [err, setErr] = useState(null);

	const [password, setPassword] = useState("");
	const emailHandler = (e) => {
		setEmail(e.target.value);
	};

	const passwordHandler = (e) => {
		setPassword(e.target.value);
	};

	const submitHandler = async () => {
		try {
			setIsLoadin(true);
			const res = await instance.post("/auth/login", {
				email,
				password,
			});
			setCurrentUser({
				userId: res.data.userId,
				isAdmin: res.data.isAdmin,
				token: res.data.token,
			});
			setIsLoadin(false);
			router.push("/");
		} catch (error) {
			setIsLoadin(false);
			console.log(error);
		}

		// setEmail("");
		// setPassword("");
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
				</>
			)}
		</div>
	);
}

export default LoginForm;
