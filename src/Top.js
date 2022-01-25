import React from "react";
import ReactDom from "react-dom";
import "./styles.css";
import earthIcon from "./icons/earth.svg";

export default function Top() {
	return (
		<nav className="head-part">
			<img src={earthIcon} className="top-image" /> my travel journal.
		</nav>
	);
}
