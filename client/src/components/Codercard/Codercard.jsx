import React from "react";
import "./CoderCardAK.css";
import { Avatar } from "@mui/material";

const LabelLoading = () => {
    return (
        <div className="label-loader">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
    );
};

function toTitleCase(str) {
    return str
        ?.toLowerCase() // Ensure the rest of the letters are lowercase
        .split(" ") // Split the string into words
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
        .join(" "); // Join words back into a string
}

const Codercard = ({ coderData }) => {
    // console.log(JSON.stringify(coderData));
    const valid = coderData?.handle;

    return (
        <div className="coder-card">
            <div className="top-section">
                <div className="left-section">
                    <h2 className="left-section-experience-text chakra-petch-regular">
                        {coderData.experience || <LabelLoading />}
                    </h2>
                    <Avatar
                        sx={{
                            color: "#000",
                            fontWeight: 400,
                            fontSize: "2rem",
                            width: 75,
                            height: 75,
                            bgcolor: "rgb(244, 110, 110)",
                        }}
                        alt="*_*"
                        src={coderData.avatar}
                    >
                        {coderData.name?.slice(0, 1) || "*_*"}
                    </Avatar>
                </div>
                <div className="right-section">
                    <h1 className="right-section-text chakra-petch-regular">Coder of the Month</h1>
                </div>
            </div>
            <div className="mid-section">
                <div className="mid-section-container">
                    <h3 className="coder-name-text chakra-petch-regular">
                        <a
                            className="usernames"
                            href={coderData.handle ? `https://codeforces.com/profile/${coderData.handle}` : "#"}
                            rel={"noopener noreferrer"}
                            target="_blank"
                        >
                            {toTitleCase(coderData.name) || <LabelLoading />}
                        </a>
                    </h3>
                </div>
            </div>
            <div className="bottom-section chakra-petch-regular">
                <div className="contests-given chakra-petch-regular">
                    {valid?coderData.contestsGiven:<LabelLoading />}
                    <h4>contests given</h4>
                </div>
                <div className={`change-in-rating ${coderData.changeInRating < 0 ? "red" : "green"}`}>
                    {valid?coderData.changeInRating:<LabelLoading />}
                    <h4>change in rating</h4>
                </div>
                <div className="questions-solved chakra-petch-regular">
                    {valid?coderData.rating:<LabelLoading />}
                    <h4>current rating</h4>
                </div>
                <div className="highest-rating chakra-petch-regular">
                    {valid?coderData.highestRating:<LabelLoading />}
                    <h4>highest rating</h4>
                </div>
            </div>
        </div>
    );
};

export default Codercard;
