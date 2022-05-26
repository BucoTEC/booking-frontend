import React from "react";
import BookingList from "../../../components/BookingRelated/BookingList";

function AllBookings({ bookings }) {
	return (
		<>
			<BookingList bookings={bookings} />
		</>
	);
}

export default AllBookings;
