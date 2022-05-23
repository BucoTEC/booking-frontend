import React from "react";
import Booking from "./Booking";

function BookingList({ bookings }) {
	return (
		<>
			<h1>this is booking list component</h1>
			{bookings?.map((booking) => (
				<Booking key={booking.id} data={booking} />
			))}
		</>
	);
}

export default BookingList;
