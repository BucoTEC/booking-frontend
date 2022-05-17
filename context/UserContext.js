import React, { useState, useEffect, createContext } from "react";

export const UserContext = createContext({
	userId: "",
	isAdmin: "",
	token: "",
	setCurrentUser: () => {},
});

export const UserContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState("");

	// initialize curretn user state
	useEffect(() => {
		const data = JSON.parse(localStorage.getItem("current_user"));
		const now = new Date();
		if (data && now.getTime() < data.expiry) {
			setCurrentUser(data.currentUser);
		} else {
			localStorage.removeItem("current_user");
			setCurrentUser(null);
		}
	}, []);

	//check for changes in current user state
	useEffect(() => {
		if (currentUser) {
			const time = new Date();
			localStorage.setItem(
				"current_user",
				JSON.stringify({
					currentUser,
					expiry: time + 172800000, //   2 days in miliseconds
				})
			);
		}
	}, [currentUser?.userId, currentUser, setCurrentUser]);

	return (
		<>
			<UserContext.Provider value={{ currentUser, setCurrentUser }}>
				{children}
			</UserContext.Provider>
		</>
	);
};
