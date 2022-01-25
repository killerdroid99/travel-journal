import React from "react";
import ReactDom from "react-dom";
import "./styles.css";
import locationIcon from "./icons/location.svg";
import Japan from "./images/Japan.jpg";
import { Title } from "@mui/icons-material";

// export default function Component() {
// 	return (
// 		<div className="Component--main">
// 			<img src={Japan} className="Component--image" alt="japan" />
// 			<div className="Component--content">
// 				<span className="content--tagline">
// 					<img src={locationIcon} />
// 					<p>JAPAN</p>
// 					<a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8" target="_blank">
// 						View on Google Maps
// 					</a>
// 				</span>
// 				<h2>Mount Fuji</h2>
// 				<div className="content--desc">
// 					<h5>12 Jan, 2021 - 24 Jan, 2021</h5>
// 					<p>
// 						Mount Fuji is the tallest mountain in Japan, standing at 3,776
// 						meters (12,380 feet). Mount Fuji is the single most tourist site in
// 						Japan, for both Japanese and foreign tourist.
// 					</p>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

export default function Component(props) {
	return (
		<div className="Component--main">
			<img
				src={props.imageUrl}
				className="Component--image"
				alt={props.title}
			/>
			<div className="Component--content">
				<span className="content--tagline">
					<img src={locationIcon} />
					<p>{props.location.toUpperCase()}</p>
					<a href={props.googleMapsUrl} target="_blank">
						View on Google Maps
					</a>
				</span>
				<h2>{props.title}</h2>
				<div className="content--desc">
					<h5>
						{props.startDate} - {props.endDate}
					</h5>
					<p>{props.description}</p>
				</div>
			</div>
		</div>
	);
}
