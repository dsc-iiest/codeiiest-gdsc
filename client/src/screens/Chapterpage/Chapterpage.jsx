import React from "react";
import ChapterContent from "../../components/ChapterContent/ChapterContent";
import "./Chapterpage.css";
import { useParams, Link } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import PageHeading from "../../components/PageHeading/PageHeading";
import NameCardM from "../../components/namecard/NameCardM";
import NameCardH from "../../components/namecard/NameCardH";
import NameCardV from "../../components/namecard/NameCardV";
import { useRef, useState, useEffect } from "react";
import { Button } from "@mui/material";
import Chapterdata from "../../../src/assets/data/chapters.json"
import { delay, motion } from "framer-motion";
import { events } from "../Home/Home";
const idMap = {
    development: "DEVELOPMENT",
    cybersecurity: "CYBER SECURITY",
    aiml: "ML and AI",
    uiux: "UI/UX",
    cpdsa: "CP/DSA",
    media: "MEDIA",
    diversity: "DIVERSITY",
};
const EventsProgress = () => {
    
    return (
        <div className="events-progress">
            {events.map((event, index) => (
                <div className="event" key={index}>
                    <ProgressBar progress={event.progress} total={event.total}></ProgressBar>
                    <div className="name">
                        {event.name}
                        <div className="progress">{Math.ceil((event.progress / event.total) * 100)}%</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const Chapterpage = () => {
    const { id } = useParams();
    const data = Chapterdata[id];
    // console.log(data);

    const { innerWidth } = window;
    const contentRef = useRef(null);
    const [height, setHeight] = useState(0);
    useEffect(() => {
        setHeight(contentRef.current.offsetHeight - 3);
    }, []);
    const scaling = height / 408 <= 1 ? height / 408 : 1;
    console.log(data.chapterContent);


    return (
        <div className="chapter-page page">
            {innerWidth > 900 && <PageHeading text={idMap[id]} />}

            <div className="bg chapter">
                <img src={`/assets/bg/${id}.png`} alt="" />
            </div>
            <div className="content outer-content" ref={contentRef}>
                <div className="body" style={{ transform: `scale(${scaling})` }}>
                    <NameCardH
                        name={data.chapterContent.leads[0].name}
                        codeiiest={data.chapterContent.leads[0].codeiiest}
                        gdg={data.chapterContent.leads[0].gdg}
                        profilepic={data.chapterContent.leads[0].profilepic}
                        descrip={data.chapterContent.leads[0].description}
                        customCSS={{
                            transform: "scale(1)",
                        }}
                    />
                    {data.chapterContent.leads.length > 1 && <NameCardH
                        name={data.chapterContent.leads[1].name}
                        codeiiest={data.chapterContent.leads[1].codeiiest}
                        gdg={data.chapterContent.leads[1].gdg}
                        profilepic={data.chapterContent.leads[1].profilepic}
                        descrip={data.chapterContent.leads[1].description}
                        customCSS={{
                            transform: "scale(1)",
                        }}
                    />}
                </div>
                {data && <ChapterContent data={data} />}
                {innerWidth <= 1150 && innerWidth > 900 && (

                    <Link className="meet-route" to="team">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >

                            Meet The Team
                        </motion.span>

                    </Link>

                )}
                <div className="chapter-leads">
                    <div className="heading">Leads</div>
                    <div className="lead-cards">
                        <NameCardV
                            name={data.chapterContent.leads[0].name}
                            codeiiest={data.chapterContent.leads[0].codeiiest}
                            gdg={data.chapterContent.leads[0].gdg}
                            profilepic={data.chapterContent.leads[0].profilepic}
                            descrip={"Building the future, one component at a time"}
                            customCSS={{
                                transform: "scale(1)",
                            }}
                        />
                        {data.chapterContent.leads.length > 1 && <NameCardV
                            name={data.chapterContent.leads[1].name}
                            codeiiest={data.chapterContent.leads[1].codeiiest}
                            gdg={data.chapterContent.leads[1].gdg}
                            profilepic={data.chapterContent.leads[1].profilepic}
                            descrip={"Building the future, one component at a time"}
                            customCSS={{
                                transform: "scale(1)",
                            }}
                        />}
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{duration: 0.2, type: "spring", stiffness: 200, mass: 1, damping: 10 }}
                    className="chapter-ev">
                    <motion.div

                        className="sub-heading">Events</motion.div>
                    <EventsProgress></EventsProgress>
                </motion.div>
                {innerWidth <= 900 && (
                    <Link to={`team`}>


                        <Button
                            sx={{
                                background: "var(--g-red)",
                                color: "#fff",
                                fontSize: "1.5rem",
                                textTransform: "none",
                                "&:hover": {
                                    background: "var(--g-red)",
                                },
                            }}
                        >

                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >

                                Meet The Team
                            </motion.span>
                        </Button>
                    </Link>
                )}
            </div>
            <div className="center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, type: "spring", stiffness: 200, mass: 1, damping: 10 }}
                    className="container">
                    <motion.div

                        className="sub-heading">Events</motion.div>
                    <EventsProgress></EventsProgress>
                </motion.div>
                <Link to={`team`}>

                    <Button
                        sx={{
                            background: "var(--g-red)",
                            color: "#fff",
                            fontSize: "1.5rem",
                            textTransform: "none",
                            "&:hover": {
                                background: "var(--g-red)",
                            },
                        }}
                    >

                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >

                            Meet The Team
                        </motion.span>
                    </Button>

                </Link>
            </div>
        </div>
    );
};

export default Chapterpage;

{
    /* <NamecardMini
name={"Rishab Dugar"}
profilepic={"profilepic"}
post={"Dev Lead and Treasurer"}
></NamecardMini>
<NamecardMini
name={"Nafis Adnan Mondal"}
profilepic={"profilepic"}
post={"Dev Lead and Treasurer"}
></NamecardMini>
<NamecardMini
name={"Rishab Dugar"}
profilepic={"profilepic"}
post={"Dev Lead and Treasurer"}
></NamecardMini> */
}
