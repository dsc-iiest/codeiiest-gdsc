import React, { useState, useEffect } from "react";
import "./Home.css";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import News from "../../components/News/News";

const EventsProgress = () => {
    const events = [
        {
            name: "ML March",
            progress: 1,
            total: 4,
        },
        {
            name: "Flutter Bootcamp",
            progress: 3,
            total: 6,
        },
    ];
    return (
        <div className="events-progress bottom-left">
            {events.map((event, index) => (
                <div className="event" key={index}>
                    <ProgressBar progress={event.progress} total={event.total}></ProgressBar>
                    <div className="name">
                        {event.name}
                        <div className="progress">{(event.progress / event.total) * 100}%</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const NewEvents = () => {
    return (
        <div className="new-events bottom-right">
            <div className="line">
                <strong>New Event Alert</strong>
            </div>
            <div className="line">
                <div className="name">Code Connect</div>
                &nbsp; starting 19/5/24
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <div className="home page">
            <div className="bg">
                <img src="/assets/bg/home_bg.png" alt="" />
            </div>
            <div className="heading">
                <div className="title">
                    <div className="line line1">
                        <div className="red">{"<"}</div>
                        CODE TOGETHER,
                    </div>
                    <div className="line line2">
                        GROW TOGETHER
                        <div className="red">{">"}</div>
                    </div>
                </div>
                <div className="tagline">
                    Collaborating lines of code, uniting two coding communities for boundless innovation.
                </div>
                <div className="logos">
                    <div className="item">
                        <img src={"/assets/logo/codeiiest-logo.png"} />
                        CodeIIEST
                    </div>
                    <div className="x">X</div>
                    <div className="item">
                        GDSC IIESTS
                        <img src={"/assets/logo/gdsc-logo.png"} />
                    </div>
                    <div className="minified">
                        <img src={"/assets/logo/codeiiest-logo.png"} />
                        <img src={"/assets/logo/gdsc-logo.png"} />
                    </div>
                </div>
            </div>
            <EventsProgress></EventsProgress>
            <NewEvents></NewEvents>
        </div>
    );
};

export default Home;
