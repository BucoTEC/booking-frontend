import AuthProvider from "../auth/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "../ui/components/NavBar/NavBar";
import MainLayout from "../ui/components/mainLayout/MainLayout";

import { UserContextProvider } from "../context/UserContext.js";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<UserContextProvider>
				<AuthProvider pageProps={pageProps}>
					<NavBar />
					<MainLayout>
						<Component {...pageProps} />
						<ToastContainer />
					</MainLayout>
				</AuthProvider>
			</UserContextProvider>
		</>
	);
}

export default MyApp;
