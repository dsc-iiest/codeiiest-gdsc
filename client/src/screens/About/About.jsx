import React, { useState } from "react";
import "./About.css";
import PageHeading from "../../components/PageHeading/PageHeading";
import { Box, Button } from "@mui/material";

// import { motion } from "framer-motion";

const codeIIEST =
    "CodeIIEST is one of the newest clubs of Indian Institute of Engineering Science and Technology, Shibpur. Formed in Nov’14 , the club has been actively involved in cultivating comprehensive skills in computer science among the students. The club consists of various enthusiasts and is a wonderful hub for a plethora of informative and interactive sessions. The students keep themselves updated with the emerging technologies, which further help them strengthen their skills and enhance creativity and innovation.";

const IIESTS =
    "Indian Institute of Engineering Science and Technology, Shibpur (IIEST Shibpur), erstwhile Bengal Engineering College (also known as B.E. College), formerly Bengal Engineering and Science University , is a public research university also a National Institute of Technology located at Shibpur, Howrah, West Bengal. Founded in 1856,it is one of the oldest public research university. It is recognized as an Institute of National Importance under MHRD by the Government of India. IIEST serves as a center for advanced learning and research. The primary activities are the creation and dissemination of knowledge, the production of high-quality engineers, scientists, and entrepreneurs equipped with cutting-edge technology, and the development of innovative technology solutions for the benefit of society.";

const AboutBox = () => {
    const [choice, setChoice] = useState(true);
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                // gap: "10px"
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
            {/* <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            > */}
                <Box
                    sx={{
                        border: "1px solid green",
                        maxWidth: "800px",
                        minHeight: "60vh",
                        padding: "1rem",
                        border: "1px solid grey",
                        background: "rgba(122, 122, 122, 0.20)",
                        fontSize: "1.2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center"

                    }}
                >
                    {choice ? codeIIEST : IIESTS}
                </Box>
            {/* </motion.div> */}
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

const about = () => {
    return (
        <div className="about page">
            <div className="bg">
                <img src="/assets/bg/home_bg.png" alt="" />
            </div>
            <PageHeading text="About Us" />
            <Box
                className="inner-content"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <AboutBox />
            </Box>
        </div>
    );
};

export default about;
