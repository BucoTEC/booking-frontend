import React from "react";

import Link from "next/link";
import AllBookings from "../../ui/pageviews/bookings/allBookings";

function Bookings() {
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
