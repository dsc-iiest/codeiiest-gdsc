import React, { useEffect, useRef, useState } from "react";
import Codercard from "../../components/Codercard/Codercard";
import "./CP_LeaderboardPage.css";
import PageHeading from "../../components/PageHeading/PageHeading";
import LeaderboardMUI from "../../components/leaderboard/LeaderboardMUI";

const topCodersData = [
    {
        name: "Nafis Adnan Mondal",
        questionsSolved: 500,
        highestRating: 1503,
        changeInRating: -8,
        contestsGiven: 97,
        experience: "Senior",
    },
    {
        name: "Abhijit Karmakar",
        questionsSolved: 500,
        highestRating: 1703,
        changeInRating: +18,
        contestsGiven: 97,
        experience: "Junior",
    },
    {
        name: "Abhijit Karmakar",
        questionsSolved: 500,
        highestRating: 1703,
        changeInRating: +18,
        contestsGiven: 97,
        experience: "Junior",
    },
    {
        name: "Rishabh Dugar",
        questionsSolved: 500,
        highestRating: 2303,
        changeInRating: +8,
        contestsGiven: 97,
        experience: "Senior",
    },
];

const CP_Leaderboard2 = () => {
    const contentRef = useRef(null);
    const [height, setHeight] = useState(0);
    useEffect(() => {
        setHeight(contentRef.current.offsetHeight);
    }, []);
    const scaling = height / 540 <= 1 ? height / 540 : 1;

    return (
        <div className="cp-leaderboard-page page">
            <div className="bg">
                <img src="/assets/bg/home_bg.png" alt="" />
            </div>
            <PageHeading text="CP Stats" />
            <div ref={contentRef} className="content-container inner-content">
                <div className="top-coders-scaler">
                    <div className="top-coders" style={{ transform: `scale(${scaling})` }}>
                        {topCodersData.map((coder, i) => (
                            <Codercard coderData={coder} key={i} />
                        ))}
                    </div>
                </div>
                <LeaderboardMUI parentHeight={height} />
            </div>
        </div>
    );
};

export default CP_Leaderboard2;
