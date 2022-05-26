import React from "react";
import { useRouter } from "next/router";

import cl from "./Booking.module.scss";

function Booking() {
	const router = useRouter();

	return (
		<div className={cl.bookingWrapper}>
			<h1>single booking</h1>
			<h3>{router.query.id}</h3>
			<div>
				<button>edit booking</button>
				<button>delete booking</button>
			</div>
		</div>
	);
}

export default Booking;
