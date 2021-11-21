import React from "react";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../imgs/img1.jpg";
import img2 from "../../imgs/img2.jpg";
import img3 from "../../imgs/img3.jpg";
import img4 from "../../imgs/img4.jpg";

export default function CarouselImg() {
	return (
		<Carousel
			autoPlay
			showArrows={false}
			showIndicators={false}
			showThumbs={false}
			infiniteLoop
		>
			<div>
				<img alt="" src={img1} style={{ height: "100vh" }} />
			</div>
			<div>
				<img alt="" src={img2} style={{ height: "100vh" }} />
			</div>
			<div>
				<img alt="" src={img3} style={{ height: "100vh" }} />
			</div>
			<div>
				<img alt="" src={img4} style={{ height: "100vh" }} />
			</div>
		</Carousel>
	);
}
