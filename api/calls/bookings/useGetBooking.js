import { useState, useContext } from "react";
import PropTypes from "prop-types";

import { UserContext } from "../../../context/UserContext";
import instance from "../../axiosInstance";
import { toast } from "react-toastify";

function useGetBooking({ id }) {
	const [isLoading, setIsLoading] = useState(false);
	const { currentUser } = useContext(UserContext);
	const getBooking = async () => {
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
	return { getBooking, isLoading };
}

export default useGetBooking;

useGetBooking.PropTypes = {
	id: PropTypes.string,
};
