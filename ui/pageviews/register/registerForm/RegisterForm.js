import React from "react";
import cl from "./RegisterForm.module.scss";

function RegisterForm() {
	console.log("register form");
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

	const registerHandler = async () => {
		try {
			setIsLoadin(true);
			const res = await axios.post("http://localhost:5000/api/auth/login", {
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
					<button onClick={registerHandler}>Login</button>
				</>
			)}
		</div>
	);
}

export default RegisterForm;
