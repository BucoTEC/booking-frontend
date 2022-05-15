import React, { useState, useEffect, createContext } from "react";

export const UserContext = createContext({
	currentUser: "",
	setCurrentUser: () => {},
});

export const UserContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState("");

	// initialize curretn user state
	useEffect(() => {
		setCurrentUser(JSON.parse(localStorage.getItem("current_user")));
	}, []);

	//check for changes in current user state
	useEffect(() => {
		if (currentUser?.userId) {
			localStorage.setItem("current_user", JSON.stringify(currentUser.userId));
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
