import React from "react";
import ReactDom from "react-dom";
import Top from "./Top";
import Component from "./Component";
import data from "./data";

export default function App() {
	const components = data.map((item) => {
		return <Component key={data.id} {...item} />;
	});

	return (
		<div className="context">
			<Top />
			{components}
		</div>
	);
}
