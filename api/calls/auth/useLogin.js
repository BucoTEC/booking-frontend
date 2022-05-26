import { useEffect, useState, useContext } from "react";

import { useRouter } from "next/router";

import { UserContext } from "../../../context/UserContext";

function useLogin({ email, password }) {
	const router = useRouter();
	const { setCurrentUser } = useContext(UserContext);
	const [isLoading, setIsLoadin] = useState(false);
	// const [err, setErr] = useState(null);
	useEffect(() => {
		const loginHandler = async () => {
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
		};

		loginHandler;
	}, []);
}

export default useLogin;
