import React, { useEffect, useState } from "react";
import "./Team.css";
import NamecardV from "../../components/namecard/NameCardV";
import Carousel from "../../components/Carousel/Carousel";
import PageHeading from "../../components/PageHeading/PageHeading";
import { useParams } from "react-router-dom";
import TeamsData from "../../assets/data/team.json";
// import { Box } from "@mui/material";

const list = [];

const About = () => {
    const { id } = useParams();
    console.log(id);

	for (let member of TeamsData[id]) {
		list.push(
			<NamecardV
				name={member.name}
				codeiiest={member.codeiiest}
				gdsc={member.gdsc}
				profilepic={member.profilepic}
				descrip={member.description}
				website={member.website}
			/>
		);
	}

	console.log(list);
	

    return (
        <div className="about-wrapper page">
            <div className="bg">
                <img src="/assets/bg/home_bg.png" alt="" />
            </div>
            <PageHeading text={ "THE TEAM"} />
            {/* <div className="outer-content"> */}
            {/* <div className="inner-content"> */}
            <Carousel items={list.slice(0, TeamsData[id].length)} />
            {/* </div> */}
            {/* </div> */}
        </div>
    );
};

export default About;
