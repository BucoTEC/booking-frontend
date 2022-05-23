import React, { useContext, useEffect } from "react";
import Link from "next/link";

import { UserContext } from "../../context/UserContext";
import AllBookings from "../../ui/pageviews/bookings/allBookings";
import instance from "../../api/axiosInstance";

function Bookings() {
	const { currentUser } = useContext(UserContext);

	useEffect(() => {
		const apiCall = async () => {
			try {
				const { data } = await instance.get("/bookings", {
					headers: {
						Authorization: `Bearer ${currentUser.token}`,
					},
				});
				console.log(data);
			} catch (err) {
				console.log(err);
			}
		};
		apiCall();
	}, [currentUser?.token]);

	return (
		<div>
			<h1>This is the bookings page</h1>
			<Link href="/bookings/create">
				<button style={{ padding: "0.5rem 1rem" }}>Create a booking</button>
			</Link>
			<AllBookings />
		</div>
	);
}

export default Bookings;

export async function getStaticProps() {
	return {
		props: { auth: true }, // will be passed to the page component as props
	};
}
