import React from "react";
import BookingCard from "../../../../components/BookingCard";

function BookingList({ bookings }) {
	return (
		<>
			<h1>this is booking list component</h1>
			{bookings?.map((booking) => (
				<BookingCard key={booking._id} data={booking} />
			))}
		</>
	);
}

export default BookingList;
