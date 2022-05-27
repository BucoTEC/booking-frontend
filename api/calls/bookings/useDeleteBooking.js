import { useState, useContext } from "react";
import { toast } from "react-toastify";

import { UserContext } from "../../../context/UserContext";

function useDeleteBooking(data) {
	const { id } = data;
	const [isLoading, setIsLoading] = useState(false);
	const { currentUser } = useContext(UserContext);

	const deleteBooking = async () => {
		try {
			setIsLoading(true);
			const res = await instance.delete(`/bookings/${id}`, {
				headers: {
					Authorization: `Bearer ${currentUser.token}`,
				},
			});
			console.log(res);
			setIsLoading(false);
			toast.success("successfuly deleted booking", {
				position: "bottom-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} catch (err) {
			setIsLoading(false);
			console.log(err);
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
	return { deleteBooking, isLoading };
}

export default useDeleteBooking;
