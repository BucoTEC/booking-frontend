import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import cl from "./Booking.module.scss";

import useDeleteBooking from "../../../../api/calls/bookings/useDeleteBooking";

function Booking() {
	const router = useRouter();
	const { id } = router.query;
	const { deleteBooking, isLoading } = useDeleteBooking({ id });

	const deleteHandler = () => {
		deleteBooking();
		router.push("/bookings");
	};

	return (
		<>
			{isLoading ? (
				<h1>...Loading</h1>
			) : (
				<div className={cl.bookingWrapper}>
					<h1>single booking</h1>
					<h3>{id}</h3>
					<div>
						<button onClick={deleteHandler}>delete booking</button>
					</div>
				</div>
			)}
		</>
	);
}

export default Booking;
