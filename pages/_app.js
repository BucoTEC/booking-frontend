import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { UserContext } from "../context/UserContext.js";

import "../styles/globals.css";
import NavBar from "../ui/components/NavBar/NavBar";
import MainLayout from "../ui/components/mainLayout/MainLayout";

import { UserContextProvider } from "../context/UserContext.js";

function MyApp({ Component, pageProps }) {
	const [user, setUser] = useState("");
	const r = useRouter();

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem("current_user")));
	}, []);

	// auth checker
	useEffect(() => {
		if (pageProps?.auth && !user) {
			r.push("/auth/login");
		}
	}, [pageProps?.auth, user, r]);

	if (pageProps?.auth && !user) {
		return <div>Loading ...</div>;
	}

	return (
		<>
			<UserContextProvider>
				<NavBar />
				<MainLayout>
					<Component {...pageProps} />
				</MainLayout>
			</UserContextProvider>
		</>
	);
}

export default MyApp;
