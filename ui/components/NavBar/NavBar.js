import React from "react";
import Link from "next/link";

import cl from "./NavBar.module.scss";

function NavBar() {
	return (
		<div className={cl.wrapper}>
			<Link href="/">test1</Link>
			<Link href="/">test2</Link>
			<Link href="/">test3</Link>
			<Link href="/">test4</Link>
			<Link href="/">test5</Link>
			<Link href="/">test6</Link>
		</div>
	);
}

export default NavBar;
