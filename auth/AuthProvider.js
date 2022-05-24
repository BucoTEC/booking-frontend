import { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";

import cl from "./AuthProvider.module.scss";

import { UserContext } from "../context/UserContext";

function AuthProvider({ pageProps, children }) {
	const router = useRouter();
	const { currentUser } = useContext(UserContext);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(false);
	}, []);

	if (
		(pageProps?.auth && !currentUser) ||
		(pageProps?.admin && !currentUser?.isAdmin)
	) {
		return (
			<div>
				{loading ? (
					<h1> ... loading</h1>
				) : (
					<div className={cl.redirect}>
						{setTimeout(() => router.push("/auth/login"), 1)}
					</div>
				)}
			</div>
		);
	}

	return <div>{children}</div>;
}

export default AuthProvider;
