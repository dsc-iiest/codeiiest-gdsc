import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard"; // To-DO --> Replace by ProjectCard
import Carousel from "../../components/Carousel/Carousel";
import PageHeading from "../../components/PageHeading/PageHeading";
// import ProgressBar from "../../components/ProgressBar/ProgressBar";
// import { Box } from "@mui/material";

const variants = [
    <Link key="development">
        <ProjectCard name={"Development"} />
    </Link>,
    <Link key="cybersecurity">
        <ProjectCard name={"Cybersecurity"} />
    </Link>,
    <Link key="aiml">
        <ProjectCard name={"AI & ML"} />
    </Link>,
    <Link key="cpdsa">
        <ProjectCard name={"CP/DSA"} />
    </Link>,
    <Link key="media">
        <ProjectCard name={"Media"} />
    </Link>,
    <Link key="diversity">
        <ProjectCard name={"Diversity"} />
    </Link>,
];

const Projects = () => {
    return (
        <div className="chapters-wrapper page">
            <div className="bg">
                <img src="/assets/bg/home_bg.png" alt="" />
            </div>
            <PageHeading text={"PROJECTS"} />
            <div className="inner-content">
                <Carousel items={variants} />
            </div>
        </div>
    );
};

export default Projects;