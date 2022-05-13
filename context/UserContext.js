import React, { useState } from "react";
import { createContext, useEffect, useReducer } from "react";

// TODO check how to get local storege in a next js app

const INITIAL_STATE = {
	user: localStorage.getItem("user"),
};

export const UserContext = createContext(INITIAL_STATE);

export const UserContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(INITIAL_STATE);
	useEffect(() => {
		console.log(currentUser);
		localStorage.setItem("user", JSON.stringify(currentUser?.userId));
	}, [currentUser]);
	return (
		<>
			<UserContext.Provider value={{ currentUser, setCurrentUser }}>
				{children}
			</UserContext.Provider>
		</>
	);
};

export async function getStaticProps() {
	// const user = localStorage.getItem("user");
	return {
		props: { user }, // will be passed to the page component as props
	};
}
