import axios from "axios";

const instance = axios.create({
	baseURL: "https://btech-solutions-booking-api.herokuapp.com/api",
	// timeout: 1000,
});

export default instance;
