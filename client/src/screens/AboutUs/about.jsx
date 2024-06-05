import React, {useState} from "react";
import "./about.css";
import { NamecardVertical } from "../../components/namecard/namecard";
import Carousel from "../../components/Carousel/Carousel";
import PageHeading from "../../components/PageHeading/PageHeading";
import { Box } from "@mui/material";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

const members = [
    <NamecardVertical
        name={"Nafis Adnan Mondal"}
        codeiiest={"Development Lead"}
        gdsc={"Development Lead"}
        profilepic={"profilepic"}
        descrip={"lorem ipsum doler sith lorem ipsum doler sith lorem ipsum doler sith"}
    />,
    <NamecardVertical
        name={"Nafis Adnan Mondal 1"}
        codeiiest={"Development Lead"}
        gdsc={"Development Lead"}
        profilepic={"profilepic"}
        descrip={"lorem ipsum doler sith lorem ipsum doler sith lorem ipsum doler sith"}
    />,
    <NamecardVertical
        name={"Nafis Adnan Mondal 2"}
        codeiiest={"Development Lead"}
        gdsc={"Development Lead"}
        profilepic={"profilepic"}
        descrip={"lorem ipsum doler sith lorem ipsum doler sith lorem ipsum doler sith"}
    />,
    <NamecardVertical
        name={"Nafis Adnan Mondal 5"}
        codeiiest={"Development Lead"}
        gdsc={"Development Lead"}
        profilepic={"profilepic"}
        descrip={"lorem ipsum doler sith lorem ipsum doler sith lorem ipsum doler sith"}
    />,
    <NamecardVertical
        name={"Nafis Adnan Mondal 6"}
        codeiiest={"Development Lead"}
        gdsc={"Development Lead"}
        profilepic={"profilepic"}
        descrip={"lorem ipsum doler sith lorem ipsum doler sith lorem ipsum doler sith"}
    />,
    <NamecardVertical
        name={"Nafis Adnan Mondal 7"}
        codeiiest={"Development Lead"}
        gdsc={"Development Lead"}
        profilepic={"profilepic"}
        descrip={"lorem ipsum doler sith lorem ipsum doler sith lorem ipsum doler sith"}
    />,
    <NamecardVertical
        name={"Nafis Adnan Mondal 8"}
        codeiiest={"Development Lead"}
        gdsc={"Development Lead"}
        profilepic={"profilepic"}
        descrip={"lorem ipsum doler sith lorem ipsum doler sith lorem ipsum doler sith"}
    />,
    <NamecardVertical
        name={"Nafis Adnan Mondal 9"}
        codeiiest={"Development Lead"}
        gdsc={"Development Lead"}
        profilepic={"profilepic"}
        descrip={"lorem ipsum doler sith lorem ipsum doler sith lorem ipsum doler sith"}
    />,
    <NamecardVertical
        name={"Nafis Adnan Mondal 10"}
        codeiiest={"Development Lead"}
        gdsc={"Development Lead"}
        profilepic={"profilepic"}
        descrip={"lorem ipsum doler sith lorem ipsum doler sith lorem ipsum doler sith"}
    />,
];

const About = () => {

    const [Margin, setMargin] = useState(0);
    const gap = 32;
    const cardWidth = 220;
    const delta = cardWidth + gap;
    const show = window.innerWidth < 1100 ? 3 : 4;

    return (
        <div className="about-wrapper page">
            <PageHeading text="THE TEAM" />
            <Carousel Margin={Margin} setMargin={setMargin} items={members} show={show} cardWidth={cardWidth} />
            <Box sx = {{
                // background: "green",
                position: "absolute",
                bottom: "20px",
                right: "125px"
            }}>
                <ProgressBar progress={show - Margin / delta} total={members.length} />
            </Box>
        </div>
    );
};

export default About;
