import "../styles/globals.css";
import NavBar from "../ui/components/NavBar/NavBar";
import MainLayout from "../ui/components/mainLayout/MainLayout";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<NavBar />
			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
		</>
	);
}

export default MyApp;
