import React from "react";

import cl from "./Booking.module.scss";

function Booking({ data }) {
	return (
		<div className={cl.bookingWrapper}>
			<div>
				<h3>Date</h3>
				{data.date}
			</div>
			{data?._id}
		</div>
	);
}

export default Booking;
