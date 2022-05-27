import { useState, useContext } from "react";
import { toast } from "react-toastify";

import { UserContext } from "../../../context/UserContext";

import instance from "../../axiosInstance";

function useCreatBooking(data) {
	const { startDate, textMessage, numOfCustomers } = data;

	const [isLoading, setIsLoading] = useState(false);
	const { currentUser } = useContext(UserContext);

	const createBooking = async () => {
		try {
			setIsLoading(true);
			const res = await instance.post(
				"/bookings",
				{
					date: startDate,
					comment: textMessage,
					amount: Number(numOfCustomers),
				},
				{
					headers: {
						Authorization: `Bearer ${currentUser.token}`,
					},
				}
			);
			console.log(res);
			setIsLoading(false);
			toast.success("success", {
				position: "bottom-center",
				autoClose: 2000,
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
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	};
	return { createBooking, isLoading };
}

export default useCreatBooking;
