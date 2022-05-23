import React from "react";

import Link from "next/link";
import AllBookings from "../../ui/pageviews/bookings/allBookings";

function Bookings() {
	return (
		<div>
			<h1>This is the bookings page</h1>
			<button style={{ padding: "0.5rem 1rem" }}>
				<Link href="/bookings/create">Create a booking</Link>
			</button>
			<AllBookings />
		</div>
	);
}

export default Bookings;
