import React from "react";
import Link from "next/link";

import cl from "./NavBar.module.scss";

function NavBar() {
	return (
		<div className={cl.wrapper}>
			<Link href="/">HOME</Link>
			<Link href="/about">ABOUTE</Link>
			<Link href="/admin">ADMIN</Link>
			<Link href="/auth/login">LOGIN</Link>
			<Link href="/auth/register">REGISTER</Link>
			<Link href="/bookings">BOOKINGS</Link>
			<Link href="/profile">PROFILE</Link>
		</div>
	);
}

export default NavBar;
