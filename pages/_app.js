import "../styles/globals.css";
import NavBar from "../ui/components/NavBar/NavBar";
import MainLayout from "../ui/components/mainLayout/MainLayout";

import { UserContextProvider } from "../context/UserContext.js";

function MyApp({ Component, pageProps }) {
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
