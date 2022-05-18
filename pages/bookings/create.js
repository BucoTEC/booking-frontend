import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { setHours, setMinutes } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";

function CreateBooking() {
	const now = new Date();
	const [startDate, setStartDate] = useState(now);
	useEffect(() => {
		console.log(startDate);
	}, [startDate]);

	return (
		<>
			<h1>Add a booking</h1>
			<div>
				<DatePicker
					showTimeSelect
					minDate={now}
					timeFormat="HH:mm"
					minTime={setHours(setMinutes(new Date(), 0), 9)}
					maxTime={setHours(setMinutes(new Date(), 0), 19)}
					selected={startDate}
					onChange={(date) => setStartDate(date)}
				/>
			</div>
		</>
	);
}

export default CreateBooking;
