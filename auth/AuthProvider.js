import { useEffect, useContext } from "react";
import { useRouter } from "next/router";

import { UserContext } from "../context/UserContext";

function AuthProvider({ component, pageProps, children }) {
	const r = useRouter();
	const { currentUser } = useContext(UserContext);

	// auth checker
	useEffect(() => {
		if (pageProps?.auth && !currentUser) {
			r.push("/auth/login");
		}
	}, [pageProps?.auth, currentUser, r]);

	if (pageProps?.auth && !currentUser) {
		return <div>Loading ...</div>;
	}

	return <div>{children}</div>;
}

export default AuthProvider;
