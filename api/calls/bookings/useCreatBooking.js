import { useState, useContext } from "react";

function useCreatBooking(data) {
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
		} catch (err) {
			setIsLoading(false);
			console.log(err);
		}
	};
	return { createBooking, isLoading };
}

export default useCreatBooking;