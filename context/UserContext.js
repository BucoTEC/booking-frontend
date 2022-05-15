import React, { useState, useEffect, createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState("");

	// initialize curretn user state
	useEffect(() => {
		const localUser = JSON.parse(localStorage.getItem("current_user"));
		if (localUser) {
			setCurrentUser(JSON.parse(localStorage.getItem("current_user")));
		}
	}, []);

	//check for changes in current user state
	useEffect(() => {
		if (currentUser.userId) {
			localStorage.setItem("current_user", JSON.stringify(currentUser.userId));
		}
	}, [currentUser.userId]);

	return (
		<>
			<UserContext.Provider value={{ currentUser, setCurrentUser }}>
				{children}
			</UserContext.Provider>
		</>
	);
};
