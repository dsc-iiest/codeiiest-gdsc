import React, {useEffect, useRef, useState} from "react";
import { Link } from "react-router-dom";
import Codercard from "../../components/Codercard/Codercard";
import arrow from "/assets/arrow-right.png";
import "./CP_Leaderboard2.css";
// import Leaderboard from "./../../components/leaderboard/leaderboard";
import PageHeading from "../../components/PageHeading/PageHeading";
import LeaderboardMUI from "../../components/leaderboard/LeaderboardMUI";

const CP_Leaderboard2 = () => {

    const contentRef = useRef(null);
    const [height, setHeight] = useState(0)
    useEffect(() => {
        setHeight(contentRef.current.offsetHeight);

    }, [])
    

    return (
        <div className="cp-leaderboard-2 page">
            <PageHeading text="CP Stats" />
            <div ref={contentRef} className="content-container inner-content">
                <div className="top-coders">
                    <div className="grid-card">
                        <Codercard
                            coderData={{
                                name: "Rishabh Dugar",
                                questionsSolved: 500,
                                highestRating: 2303,
                                changeInRating: -8,
                                contestsGiven: 97,
                                experience: "Senior",
                            }}
                        />
                    </div>
                    <div className="grid-card">
                        <Codercard
                            coderData={{
                                name: "Nafis Adnan Mondal",
                                questionsSolved: 500,
                                highestRating: 1503,
                                changeInRating: -8,
                                contestsGiven: 97,
                                experience: "Senior",
                            }}
                        />
                    </div>
                    <div className="grid-card">
                        <Codercard
                            coderData={{
                                name: "Abhijit Karmakar",
                                questionsSolved: 500,
                                highestRating: 1703,
                                changeInRating: +18,
                                contestsGiven: 97,
                                experience: "Junior",
                            }}
                        />
                    </div>
                    <div className="grid-card">
                        <Codercard
                            coderData={{
                                name: "Rishabh Dugar",
                                questionsSolved: 500,
                                highestRating: 2303,
                                changeInRating: +8,
                                contestsGiven: 97,
                                experience: "Senior",
                            }}
                        />
                    </div>
                </div>
                <div className="leaderboard">
                    <LeaderboardMUI parentHeight={height} />
                </div>
            </div>
        </div>
    );
};

export default CP_Leaderboard2;
