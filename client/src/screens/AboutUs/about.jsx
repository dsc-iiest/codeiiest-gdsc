import React, { useState } from "react";
import "./about.css";
import { NamecardVertical } from "../../components/namecard/namecard";
import Carousel from "../../components/Carousel/Carousel";
import PageHeading from "../../components/PageHeading/PageHeading";
import { Box } from "@mui/material";

const members = [
	<NamecardVertical
		name={"Nafis Adnan Mondal"}
		codeiiest={"Development Lead"}
		gdsc={"Development Lead"}
		profilepic={"profilepic"}
		descrip={
			"Building the future, one component at a time"
		}
	/>,
	<NamecardVertical
		name={"Nafis Adnan"}
		codeiiest={"Development Lead"}
		gdsc={"Development Lead"}
		profilepic={"profilepic"}
		descrip={
			"Building the future, one component at a time"
		}
	/>,
	<NamecardVertical
		name={"Nafis Adnan Mondal 2000"}
		codeiiest={"Development Lead"}
		gdsc={"Development Lead"}
		profilepic={"profilepic"}
		descrip={
			"Building the future, one component at a time"
		}
	/>,
	<NamecardVertical
		name={"Nafi"}
		codeiiest={"Development Lead"}
		gdsc={"Development Lead"}
		profilepic={"profilepic"}
		descrip={
			"Building the future, one component at a time"
		}
	/>,
	<NamecardVertical
		name={"Nafis Mondal 6"}
		codeiiest={"Development Lead"}
		gdsc={"Development Lead"}
		profilepic={"profilepic"}
		descrip={
			"Building the future, one component at a time"
		}
	/>,
	<NamecardVertical
		name={"Nafis Adnan Mondal 7"}
		codeiiest={"Development Lead"}
		gdsc={"Development Lead"}
		profilepic={"profilepic"}
		descrip={
			"Building the future, one component at a time"
		}
	/>,
	<NamecardVertical
		name={"Nafis Adnan Mondal 8"}
		codeiiest={"Development Lead"}
		gdsc={"Development Lead"}
		profilepic={"profilepic"}
		descrip={
			"Building the future, one component at a time"
		}
	/>,
	<NamecardVertical
		name={"Nafis Adnan Mondal 9"}
		codeiiest={"Development Lead"}
		gdsc={"Development Lead"}
		profilepic={"profilepic"}
		descrip={
			"Building the future, one component at a time"
		}
	/>,
	<NamecardVertical
		name={"Nafis Adnan Mondal 10"}
		codeiiest={"Development Lead"}
		gdsc={"Development Lead"}
		profilepic={"profilepic"}
		descrip={
			"Building the future, one component at a time"
		}
	/>,
];

const About = () => {
	return (
		<div className="about-wrapper page">
			<div className="bg">
				<img src="/assets/bg/home_bg.png" alt="" />
			</div>
			<PageHeading text="THE TEAM" />
			<div className="outer-content">
				<div className="carousel-wrapper inner-content">
					<Carousel items={members} />
				</div>
			</div>
		</div>
	);
};

export default About;
