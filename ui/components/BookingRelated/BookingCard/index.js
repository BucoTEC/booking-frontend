import React from "react";
import Link from "next/link";

import cl from "./BookingCard.module.scss";

function BookingCard({ data }) {
	return (
		<div className={cl.bookingWrapper}>
			<div>
				<h3>Date</h3>
				{data.date}
			</div>
			<div>
				<Link href={`/bookings/${data._id}`}>
					<button>view</button>
				</Link>
			</div>
		</div>
	);
}

export default BookingCard;
