import { useState, useContext } from "react";

import { useRouter } from "next/router";

import { UserContext } from "../../../context/UserContext";

import instance from "../../axiosInstance";

function useLogin(data) {
	const { email, password } = data;
	const router = useRouter();
	const { setCurrentUser } = useContext(UserContext);
	const [isLoading, setIsLoadin] = useState(false);
	// const [err, setErr] = useState(null);
	const login = async () => {
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

	return {
		isLoading,
		login,
	};
}

export default useLogin;
