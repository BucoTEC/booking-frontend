import React, { useState, useContext } from "react";

import cl from "./createBookingPageView.module.scss";
import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";
import { setHours, setMinutes, addDays, getDay } from "date-fns";

import { UserContext } from "../../../../context/UserContext";

import instance from "../../../../api/axiosInstance";

// TODO check if there is way to remove booked time from selection

function CreateBookingPageView() {
	const now = new Date();
	const { user } = useContext(UserContext);
	const [startDate, setStartDate] = useState(now);
	const [textMessage, setTextMessage] = useState("");
	const [numOfCustomers, setNumOfCustomers] = useState("");

	const isWeekday = (date) => {
		const day = getDay(date);
		return day !== 0;
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		console.log({
			date: startDate,
			msg: textMessage,
			num: numOfCustomers,
		});
		try {
			const res = await instance.post("/bookings", {
				user: user.userId,
				date: startDate,
				comment: textMessage,
				amount: numOfCustomers,
			});
			console.log(res);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<>
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
		</>
	);
}

export default CreateBookingPageView;
