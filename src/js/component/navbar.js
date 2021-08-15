import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<nav className=" row navbar navbar-light mb-3 text-center" style={{ backgroundColor: "black" }}>
			<Link to="/">
				<img
					className="col"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png"
				/>
			</Link>
			<div className="col fuente ml-auto mr-auto">Star Wars Databank</div>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="col btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
