import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import PageHeading from "../../components/PageHeading/PageHeading";
import { Box, Button } from "@mui/material";

import { motion } from "framer-motion";

const codeIIEST =
    "CodeIIEST is one of the newest clubs of Indian Institute of Engineering Science and Technology, Shibpur. Formed in Nov'14 , the club has been actively involved in cultivating comprehensive skills in computer science among the students. The club consists of various enthusiasts and is a wonderful hub for a plethora of informative and interactive sessions. The students keep themselves updated with the emerging technologies, which further help them strengthen their skills and enhance creativity and innovation.";

const IIESTS =
    "Indian Institute of Engineering Science and Technology, Shibpur (IIEST Shibpur), formerly Bengal Engineering College, is a premier public research university and National Institute of Technology in Howrah, West Bengal. Established in 1856, IIEST is among India's oldest institutions and is recognized as an Institute of National Importance by the Government of India. The university focuses on advanced research, producing skilled engineers, scientists, and entrepreneurs, and developing innovative solutions for societal benefit.";

const AboutBox = () => {
    const [choice, setChoice] = useState(true);
    const displayRef = useRef(null);
    const [contentWidth, setContentWidth] = useState(0);
    useEffect(() => {
        setContentWidth(displayRef.current.offsetWidth);
    }, []);
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                gap: `${contentWidth}px`,
            }}
            className="about-box"
        >
            <Box
                className={"tab" + (choice ? " tabselected" : "")}
                sx={{
                    transform: "rotate(180deg)",
                    borderBottomRightRadius: "5px",
                    borderTopRightRadius: "5px",
                }}
                onClick={() => setChoice(true)}
            >
                CodeIIEST
            </Box>
            <Box ref={displayRef} className={"content-area" + (choice ? " appear" : " hide")}>
                {codeIIEST}
            </Box>
            <Box ref={displayRef} className={"content-area" + (!choice ? " appear" : " hide")}>
                {IIESTS}
            </Box>

            <Box
                className={"tab" + (!choice ? " tabselected" : "")}
                sx={{
                    borderBottomRightRadius: "5px",
                    borderTopRightRadius: "5px",
                }}
                onClick={() => setChoice(false)}
            >
                IIEST Shibpur
            </Box>
        </Box>
    );
};
const AboutBoxMobile = () => {
    const [choice, setChoice] = useState(true);

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}
            className="about-box-mobile"
        >
            <Box className="tabgroup">
                <Box
                    className={"tab" + (choice ? " tabselected" : "")}
                    onClick={() => setChoice(true)}
                    sx={{
                        borderTopRightRadius: "0px !important",
                        "&:after": {
                            borderTopRightRadius: "0px !important",
                        },
                    }}
                >
                    CodeIIEST
                </Box>
                <Box
                    className={"tab" + (!choice ? " tabselected" : "")}
                    onClick={() => setChoice(false)}
                    sx={{
                        borderTopLeftRadius: "0px !important",
                        "&:after": {
                            borderTopLeftRadius: "0px !important",
                        },
                    }}
                >
                    IIEST Shibpur
                </Box>
            </Box>
            <Box className={"content-area" + (choice ? " appear" : " hide")}>{codeIIEST}</Box>
            <Box className={"content-area" + (!choice ? " appear" : " hide")}>{IIESTS}</Box>
        </Box>
    );
};

const about = () => {
    const { innerWidth } = window;
    return (
        <div className="about page">
            <div className="bg">
                <img src="/assets/bg/home_bg.png" alt="" />
            </div>
            <PageHeading text="About Us" />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                className="inner-content"
            >
                {innerWidth >= 900 ? <AboutBox /> : <AboutBoxMobile />}
            </Box>
        </div>
    );
};

export default about;
