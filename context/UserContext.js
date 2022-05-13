import React, { useState, useEffect, createContext } from "react";

// TODO check how to get local storege in a next js app

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState("");
	useEffect(() => {
		if (JSON.parse(localStorage.getItem("user"))) {
			setCurrentUser(JSON.parse(localStorage.getItem("user")));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(currentUser.userId));
	}, [currentUser]);

	return (
		<>
			<UserContext.Provider value={{ currentUser, setCurrentUser }}>
				{children}
			</UserContext.Provider>
		</>
	);
};
