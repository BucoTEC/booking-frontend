import React, { useState } from "react";
import { createContext, useEffect, useReducer } from "react";

// TODO check how to get local storege in a next js app

const getStorage = () => {
	if (typeof window !== "undefined") {
		// Perform localStorage action
		const item = localStorage.getItem("key");
		return JSON.parse(item);
	}
};

const INITIAL_STATE = {
	user: getStorage() || null,
};

export const UserContext = createContext(INITIAL_STATE);

export const UserContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(INITIAL_STATE);

	useEffect(() => {
		localStorage.setItem("booking_user", JSON.stringify(currentUser));
	}, [currentUser]);
	return (
		<>
			<UserContext.Provider value={{ currentUser, setCurrentUser }}>
				{children}
			</UserContext.Provider>
		</>
	);
};
