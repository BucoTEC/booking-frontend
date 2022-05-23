import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";

import { UserContext } from "../../context/UserContext";
import AllBookings from "../../ui/pageviews/bookings/allBookings";
import instance from "../../api/axiosInstance";

function Bookings() {
	const { currentUser } = useContext(UserContext);
	const [allBookings, setAllBookings] = useState([]);
	const [loading, setLoadin] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		const apiCall = async () => {
			try {
				setLoadin((prev) => !prev);
				const { data } = await instance.get("/bookings", {
					headers: {
						Authorization: `Bearer ${currentUser.token}`,
					},
				});
				setAllBookings(data?.data);
				setLoadin((prev) => !prev);
			} catch (err) {
				setLoadin((prev) => !prev);
				setError(true);
				console.log(err);
			}
		};
		apiCall();
	}, [currentUser]);

	if (loading) {
		return <h1>...Loading</h1>;
	}

	if (error) {
		return <h1>Ups there was an error</h1>;
	}

	return (
		<div>
			<h1>This is the bookings page</h1>
			<Link href="/bookings/create">
				<button style={{ padding: "0.5rem 1rem" }}>Create a booking</button>
			</Link>
			<AllBookings bookings={allBookings} />
		</div>
	);
}

export default Bookings;

export async function getStaticProps() {
	return {
		props: { auth: true }, // will be passed to the page component as props
	};
}
