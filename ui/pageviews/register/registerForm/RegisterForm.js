import React from "react";
import cl from "./RegisterForm.module.scss";

function RegisterForm() {
	console.log("register form");
	return (
		<div className={cl.input_wrapper}>
			<h1 className={cl.header}>Register</h1>
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

export default RegisterForm;
