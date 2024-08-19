import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Cards } from "./Cards.jsx";

const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron/>
			<Cards/>
		</>
	);
};

export default Home;
