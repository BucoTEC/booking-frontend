import React, { useState } from "react";

import { useRouter } from "next/router";

import { toast } from "react-toastify";

import instance from "../../../../api/axiosInstance";

import cl from "./RegisterForm.module.scss";

function RegisterForm() {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");

	const [isLoading, setIsLoadin] = useState(false);
	// const [err, setErr] = useState(null);

	const [password, setPassword] = useState("");

	const usernameHandler = (e) => {
		setUsername(e.target.value);
	};

	const emailHandler = (e) => {
		setEmail(e.target.value);
	};

	const passwordHandler = (e) => {
		setPassword(e.target.value);
	};

	const registerHandler = async () => {
		try {
			setIsLoadin(true);
			await instance.post("/auth/register", {
				username,
				email,
				password,
			});

			setIsLoadin(false);
			toast.success("success", {
				position: "bottom-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} catch (error) {
			setIsLoadin(false);
			console.log(error);
			toast("fail");
		}

		// setEmail("");
		// setPassword("");
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
						onChange={usernameHandler}
						required
						min="3"
					/>
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
					<button onClick={registerHandler}>Register</button>
				</>
			)}
		</div>
	);
}

export default RegisterForm;
