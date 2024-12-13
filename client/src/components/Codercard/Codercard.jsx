import React from "react";
import "./CoderCardAK.css";
import { Avatar } from "@mui/material";

const LabelLoading = () => {
    return <div className="label-loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
    </div>;
};

const Codercard = ({ coderData }) => {
    return (
        <div className="coder-card">
            <div className="top-section">
                <div className="left-section">
                    <h2 className="left-section-experience-text chakra-petch-regular">
                        {coderData.experience || <LabelLoading />}
                    </h2>
                    <Avatar sx= {{width: 75, height: 75}} alt="Remy Sharp" src={coderData.avatar || "/assets/profile-pics/profile.jpg"} />
                </div>
                <div className="right-section">
                    <h1 className="right-section-text chakra-petch-regular">Coder of the Month</h1>
                </div>
            </div>
            <div className="mid-section">
                <div className="mid-section-container">
                    <h3 className="coder-name-text chakra-petch-regular">{coderData.name || <LabelLoading />}</h3>
                </div>
            </div>
            <div className="bottom-section chakra-petch-regular">
                <div className="contests-given chakra-petch-regular">
                    {coderData.contestsGiven || <LabelLoading />}
                    <h4>contests given</h4>
                </div>
                <div className={`change-in-rating ${coderData.changeInRating < 0 ? "red" : "green"}`}>
                    {coderData.changeInRating || <LabelLoading />}
                    <h4>change in rating</h4>
                </div>
                <div className="questions-solved chakra-petch-regular">
                    {coderData.rating || <LabelLoading />}
                    <h4>current rating</h4>
                </div>
                <div className="highest-rating chakra-petch-regular">
                    {coderData.highestRating || <LabelLoading />}
                    <h4>highest rating</h4>
                </div>
            </div>
        </div>
    );
};

export default Codercard;
