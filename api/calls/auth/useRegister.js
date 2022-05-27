import { useState } from "react";

function useRegister() {
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
			toast("fail");
		}
	};
	return {
		register,
		isLoading,
	};
}

export default useRegister;
