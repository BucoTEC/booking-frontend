import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { setHours, setMinutes, addDays, getDay } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";

function CreateBooking() {
	const now = new Date();
	const [startDate, setStartDate] = useState(now);
	useEffect(() => {
		console.log(startDate);
	}, [startDate]);

	const isWeekday = (date) => {
		const day = getDay(date);
		return day !== 0;
	};

	return (
		<>
			<h1>Add a booking</h1>
			<div>
				<DatePicker
					showTimeSelect
					inline
					minDate={now}
					maxDate={addDays(now, +14)}
					timeFormat="HH:mm"
					minTime={setHours(setMinutes(now, 0), 9)}
					maxTime={setHours(setMinutes(now, 30), 18)}
					filterDate={isWeekday}
					selected={startDate}
					onChange={(date) => setStartDate(date)}
				/>
				<textarea rows="15" cols="37"></textarea>
			</div>
		</>
	);
}

export default CreateBooking;
