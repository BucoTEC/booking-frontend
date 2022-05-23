import React from "react";
import BookingList from "./BookingList";

function AllBookings({ bookings }) {
	return (
		<>
			<BookingList bookings={bookings} />
		</>
	);
}

export default AllBookings;
