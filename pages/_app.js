import AuthProvider from "../auth/AuthProvider";

import "../styles/globals.css";
import NavBar from "../ui/components/NavBar/NavBar";
import MainLayout from "../ui/components/mainLayout/MainLayout";

import { UserContextProvider } from "../context/UserContext.js";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<UserContextProvider>
				<AuthProvider component={Component} pageProps={pageProps}>
					<NavBar />
					<MainLayout>
						<Component {...pageProps} />
					</MainLayout>
				</AuthProvider>
			</UserContextProvider>
		</>
	);
}

export default MyApp;
