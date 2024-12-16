import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./Chapters.css";
import ChapterCard from "../../components/ChapterCard/ChapterCard";
import Carousel from "../../components/Carousel/Carousel";
import PageHeading from "../../components/PageHeading/PageHeading";
// import ProgressBar from "../../components/ProgressBar/ProgressBar";
// import { Box } from "@mui/material";

const variants = [
    <Link key="development" to="/chapters/development">
        <ChapterCard name={"Development"} />
    </Link>,
    <Link key="cybersecurity" to="/chapters/cybersecurity">
        <ChapterCard name={"Cybersecurity"} />
    </Link>,
    <Link key="aiml" to="/chapters/aiml">
        <ChapterCard name={"AI & ML"} />
    </Link>,
    <Link key="cpdsa" to="/chapters/cpdsa">
        <ChapterCard name={"CP/DSA"} />
    </Link>,
    <Link key="media" to="/chapters/media">
        <ChapterCard name={"Media"} />
    </Link>,
    <Link key="diversity" to="/chapters/diversity">
        <ChapterCard name={"Diversity"} />
    </Link>,
];

const Chapters = () => {
    return (
        <div className="chapters-wrapper page">
            <div className="bg">
                <img src="/assets/bg/home_bg.png" alt="" />
            </div>
            <PageHeading text={"CHAPTERS"} />
            <div className="inner-content">
                <Carousel items={variants} />
            </div>
        </div>
    );
};

export default Chapters;
