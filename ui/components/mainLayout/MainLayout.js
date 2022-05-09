import React from "react";
import cl from "./MainLayout.module.scss";
function MainLayout(props) {
	return <div className={cl.wrapper}>{props.children}</div>;
}

export default MainLayout;
