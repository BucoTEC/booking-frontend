import "../styles/globals.css";
import NavBar from "../ui/components/NavBar/NavBar";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<NavBar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
