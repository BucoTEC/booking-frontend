import { useEffect } from "react";
import { useRouter } from "next/router";

import "../styles/globals.css";
import NavBar from "../ui/components/NavBar/NavBar";
import MainLayout from "../ui/components/mainLayout/MainLayout";

import { UserContextProvider } from "../context/UserContext.js";

// fix redirecting if not loged in

function MyApp({ Component, pageProps }) {
	const r = useRouter();
	useEffect(() => {
		if (pageProps?.auth) {
			r.push("/auth/login");
		}
	}, [pageProps?.auth, r]);

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
