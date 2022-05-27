import { useState } from "react";
import { toast } from "react-toastify";

import instance from "../../axiosInstance";

function useRegister(data) {
	const { username, email, password } = data;
	const [isLoading, setIsLoadin] = useState(false);

	const register = async () => {
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
			toast.error("fail", {
				position: "bottom-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	};
	return {
		register,
		isLoading,
	};
}

export default useRegister;
