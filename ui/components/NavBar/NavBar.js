import React, { useContext } from "react";
import Link from "next/link";
import { UserContext } from "../../../context/UserContext";

import cl from "./NavBar.module.scss";

function NavBar() {
	const { currentUser, setCurrentUser } = useContext(UserContext);
	const logOutHandler = () => {
		setCurrentUser(null);
		localStorage.setItem("current_user", JSON.stringify(null));

		console.log(currentUser);
	};

	return (
		<div style={{ display: "flex", flexDirection: "row", width: "full" }}>
			<div className={cl.wrapper}>
				<Link href="/">HOME</Link>
				<Link href="/about">ABOUTE</Link>
				<Link href="/admin">ADMIN</Link>
				<Link href="/auth/login">LOGIN</Link>
				<Link href="/auth/register">REGISTER</Link>
				<Link href="/bookings">BOOKINGS</Link>
				<Link href="/profile">PROFILE</Link>
				<span onClick={logOutHandler}>LOG OUT</span>
			</div>
			{/* <div className={currentUser ? cl.lampica : cl.zeleno}></div> */}
		</div>
	);
}

export default NavBar;
