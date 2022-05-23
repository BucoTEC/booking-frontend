import { useEffect, useContext } from "react";
import { useRouter } from "next/router";

import { UserContext } from "../context/UserContext";

function AuthProvider({ pageProps, children }) {
	const router = useRouter();
	const { currentUser } = useContext(UserContext);

	// auth checker
	useEffect(() => {
		if (!currentUser?.userId && pageProps?.auth) {
			router.push("/auth/login");
		} else if (pageProps?.admin && !currentUser?.isAdmin) {
			router.push("/");
		}
	}, [
		pageProps?.auth,
		pageProps?.admin,
		currentUser,
		currentUser?.isAdmin,
		router,
	]);

	if (
		(pageProps?.auth && !currentUser) ||
		(pageProps?.admin && !currentUser?.isAdmin)
	) {
		return <div>Loading ...</div>;
	}

	return <div>{children}</div>;
}

export default AuthProvider;
