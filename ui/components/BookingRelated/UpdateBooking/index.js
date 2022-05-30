import React, { useState } from "react";
import DatePicker from "react-datepicker";

function UpdateBooking() {
	const now = new Date();

	const [startDate, setStartDate] = useState(now);
	const [textMessage, setTextMessage] = useState("");
	const [numOfCustomers, setNumOfCustomers] = useState(1);

	return (
		<form action="/" onSubmit={(e) => submitHandler(e)}>
			<DatePicker
				required
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
			<div className={cl.omotac}>
				<textarea
					rows="15"
					cols="37"
					required
					onChange={(e) => setTextMessage(e.target.value)}
				></textarea>
				<select
					name="num"
					id="num"
					required
					onChange={(e) => setNumOfCustomers(e.target.value)}
				>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
				</select>
			</div>
			<button type="submit">make new booking</button>
		</form>
	);
}

export default UpdateBooking;
