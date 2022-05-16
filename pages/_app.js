import { useEffect } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";

import { UserContext } from "../context/UserContext.js";

import "../styles/globals.css";
import NavBar from "../ui/components/NavBar/NavBar";
import MainLayout from "../ui/components/mainLayout/MainLayout";

import { UserContextProvider } from "../context/UserContext.js";

function MyApp({ Component, pageProps }) {
	const { currentUser } = useContext(UserContext);
	console.log(currentUser);
	const r = useRouter();

	// auth checker
	useEffect(() => {
		if (pageProps?.auth && !currentUser) {
			r.push("/auth/login");
		}
	}, [pageProps?.auth, currentUser, r]);

	if (pageProps?.auth) {
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
