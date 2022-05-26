import React from "react";
import Link from "next/link";

import cl from "./Booking.module.scss";

function Booking({ data }) {
	return (
		<div className={cl.bookingWrapper}>
			<div>
				<h3>Date</h3>
				{data.date}
			</div>
			<div>
				<Link></Link>
				<button>view</button>
			</div>
		</div>
	);
}

export default Booking;
