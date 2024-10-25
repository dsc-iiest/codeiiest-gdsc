import React, { useState } from "react";
import "./about.css";
import NamecardV from "../../components/namecard/NameCardV";
import Carousel from "../../components/Carousel/Carousel";
import PageHeading from "../../components/PageHeading/PageHeading";
// import { Box } from "@mui/material";

const members = [
	<NamecardV
		name={"Nafis Adnan Mondal"}
		codeiiest={"Development Lead"}
		gdsc={"Development Lead"}
		profilepic={"profilepic"}
		descrip={
			"Building the future, one component at a time"
		}
	/>,
	<NamecardV
		name={"Nafis Adnan"}
		codeiiest={"Development Lead"}
		gdsc={"Development Lead"}
		profilepic={"profilepic"}
		descrip={
			"Building the future, one component at a time"
		}
	/>,
	<NamecardV
		name={"Nafis Adnan Mondal 2000"}
		codeiiest={"Development Lead"}
		gdsc={"Development Lead"}
		profilepic={"profilepic"}
		descrip={
			"Building the future, one component at a time"
		}
	/>,
	<NamecardV
		name={"Nafi"}
		codeiiest={"Development Lead"}
		gdsc={"Development Lead"}
		profilepic={"profilepic"}
		descrip={
			"Building the future, one component at a time"
		}
	/>,
	<NamecardV
		name={"Nafis Mondal 6"}
		codeiiest={"Development Lead"}
		gdsc={"Development Lead"}
		profilepic={"profilepic"}
		descrip={
			"Building the future, one component at a time"
		}
	/>,
	<NamecardV
		name={"Nafis Adnan Mondal 7"}
		codeiiest={"Development Lead"}
		gdsc={"Development Lead"}
		profilepic={"profilepic"}
		descrip={
			"Building the future, one component at a time"
		}
	/>,
	<NamecardV
		name={"Nafis Adnan Mondal 8"}
		codeiiest={"Development Lead"}
		gdsc={"Development Lead"}
		profilepic={"profilepic"}
		descrip={
			"Building the future, one component at a time"
		}
	/>,
	<NamecardV
		name={"Nafis Adnan Mondal 9"}
		codeiiest={"Development Lead"}
		gdsc={"Development Lead"}
		profilepic={"profilepic"}
		descrip={
			"Building the future, one component at a time"
		}
	/>,
	<NamecardV
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
			{/* <div className="outer-content"> */}
			{/* <div className="carousel-wrapper"> */}
				<Carousel items={members} />
			{/* </div> */}
			{/* </div> */}
		</div>
	);
};

export default About;
