import React, { useState, useEffect } from "react";

import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";
import { setHours, setMinutes, addDays, getDay } from "date-fns";

function CreateBookingPageView() {
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
		<div>
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
				<select name="num" id="num">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
				</select>
			</div>
		</div>
	);
}

export default CreateBookingPageView;
