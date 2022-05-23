import React from "react";

function Booking({ data }) {
	console.log(data);
	return <div>{data?.status}</div>;
}

export default Booking;
