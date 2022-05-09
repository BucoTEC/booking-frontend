import React from "react";
import { useRouter } from "next/router";

function OneBooking() {
	const router = useRouter();
	return (
		<div>
			OneBooking
			<h1>this is your current id</h1>
			<h3>{router.query.id}</h3>
		</div>
	);
}

export default OneBooking;
