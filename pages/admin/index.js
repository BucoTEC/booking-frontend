import React from "react";

function Admin() {
	return <div>Admin</div>;
}

export default Admin;

export async function getStaticProps() {
	return {
		props: { auth: true }, // will be passed to the page component as props
	};
}
