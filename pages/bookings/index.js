import React, { useContext, useEffect } from "react";
import Link from "next/link";

import { UserContext } from "../../context/UserContext";
import AllBookings from "../../ui/pageviews/bookings/allBookings";
import instance from "../../api/axiosInstance";

function Bookings() {
	const { currentUser } = useContext(UserContext);

	useEffect(() => {
		const apiCall = async () => {
			const res = instance.get("/test");
			console.log(res);
		};
	}, []);

	console.log(currentUser);
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
