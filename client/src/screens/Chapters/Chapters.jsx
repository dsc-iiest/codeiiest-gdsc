import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./Chapters.css";
import ChapterCard from "../../components/ChapterCard/ChapterCard";
import Carousel from "../../components/Carousel/Carousel";
import PageHeading from "../../components/PageHeading/PageHeading";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { Box } from "@mui/material";

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
    const [Margin, setMargin] = useState(0);
    const gap = 32;
    const cardWidth = window.innerWidth < 1100 ? 192 : 240;
    const delta = cardWidth + gap;
    const show = window.innerWidth < 1100 ? 3 : 4;

    return (
        <div className="chapters-wrapper page">
            <PageHeading text={"CHAPTERS"} />
            <Carousel Margin={Margin} setMargin={setMargin} items={variants} show={show} cardWidth={cardWidth} />
            <Box sx = {{
                // background: "green",
                position: "absolute",
                bottom: "20px",
                right: "125px"
            }}>
                <ProgressBar progress={show - Margin / delta} total={variants.length} />
            </Box>
        </div>
    );
};

export default Chapters;
