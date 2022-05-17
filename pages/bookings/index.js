import React from "react";

import Link from "next/link";

function Bookings() {
	return (
		<div>
			<h1>this is the bookings page</h1>
			<button style={{ padding: "0.5rem 1rem" }}>
				<Link href="/bookings/create">Create a booking</Link>
			</button>
		</div>
	);
}

export default Bookings;
