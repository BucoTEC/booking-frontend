import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateBooking() {
	const [startDate, setStartDate] = useState(new Date());
	let handleColor = (time) => {
		return time.getHours() > 12 ? "text-success" : "text-error";
	};
	return (
		<>
			<h1>Add a booking</h1>
			<div>
				<DatePicker
					showTimeSelect
					selected={startDate}
					onChange={(date) => setStartDate(date)}
					timeClassName={handleColor}
				/>
			</div>
		</>
	);
}

export default CreateBooking;
