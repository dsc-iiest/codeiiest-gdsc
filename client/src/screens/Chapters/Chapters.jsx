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
    <Link key="uiux" to="/chapters/uiux">
        <ChapterCard name={"UI/UX"} />
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
            <PageHeading text={"CHAPTERS"} />
            <Carousel className="inner-content" items={variants} />
        </div>
    );
};

export default Chapters;