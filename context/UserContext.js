import React, { useState } from "react";
import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
	user: JSON.parse(localStorage.getItem("booking_user")) || null,
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
