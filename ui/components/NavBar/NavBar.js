import React, { useContext } from "react";
import Link from "next/link";
import { UserContext } from "../../../context/UserContext";

import cl from "./NavBar.module.scss";

function NavBar() {
	const { currentUser, setCurrentUser } = useContext(UserContext);
	const logOutHandler = () => {
		setCurrentUser(null);
		localStorage.setItem("current_user", JSON.stringify(null));
	};

	return (
		<div style={{ display: "flex", flexDirection: "row", width: "full" }}>
			<div className={cl.wrapper}>
				<Link href="/">HOME</Link>
				<Link href="/about">ABOUTE</Link>
				<Link href="/admin">ADMIN</Link>
				{!currentUser && (
					<>
						<Link href="/auth/login">LOGIN</Link>
						<Link href="/auth/register">REGISTER</Link>
					</>
				)}
				<Link href="/bookings">BOOKINGS</Link>
				<Link href="/profile">PROFILE</Link>
				{currentUser && <span onClick={logOutHandler}>LOG OUT</span>}
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
