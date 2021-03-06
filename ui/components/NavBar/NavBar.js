import React, { useContext } from "react";
import Link from "next/link";
import { UserContext } from "../../../context/UserContext";
import { useRouter } from "next/router";

import cl from "./NavBar.module.scss";

function NavBar() {
	const { currentUser, setCurrentUser } = useContext(UserContext);
	const r = useRouter();
	const logOutHandler = () => {
		setCurrentUser(null);
		localStorage.removeItem("current_user");
		r.push("/");
	};

	return (
		<div style={{ display: "flex", flexDirection: "row", width: "full" }}>
			<div className={cl.wrapper}>
				<Link href="/">HOME</Link>
				<Link href="/about">ABOUTE</Link>
				{!currentUser && (
					<>
						<Link href="/auth/login">LOGIN</Link>
						<Link href="/auth/register">REGISTER</Link>
					</>
				)}
				{currentUser && (
					<>
						<Link href="/bookings">BOOKINGS</Link>
						<Link href="/profile">PROFILE</Link>
						{currentUser.isAdmin && <Link href="/admin">ADMIN</Link>}
						<span onClick={logOutHandler}>LOG OUT</span>
					</>
				)}
			</div>
			{currentUser ? (
				<div className={cl.zeleno}></div>
			) : (
				<div className={cl.crveno}></div>
			)}
		</div>
	);
}

export default NavBar;
