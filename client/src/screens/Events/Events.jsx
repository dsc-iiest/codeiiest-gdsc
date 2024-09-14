import { React, useState } from "react";

// import ProgressBar from "../../components/ProgressBar/ProgressBar";
// import { Box } from "@mui/material";
import EventCard from "../../components/EventCard/EventCard";
import "./Events.css"
const Events = () => {
    
    return <div className="Event-wrapper page">
        <div className="bg">
            <img src="/assets/bg/home_bg.png" alt="" />
        </div>
        <EventCard />
    </div>
};

export default Events;