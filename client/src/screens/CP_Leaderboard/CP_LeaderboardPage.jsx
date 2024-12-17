import React, { useEffect, useRef, useState } from "react";
import Codercard from "../../components/Codercard/Codercard";
import "./CP_LeaderboardPage.css";
import PageHeading from "../../components/PageHeading/PageHeading";
import LeaderboardMUI from "../../components/leaderboard/LeaderboardMUI";
import { motion } from "framer-motion";
import { calculateTopCoders } from "./calculateTopCoders";
import { delayForLeaderBoardsPage } from "../../components/iconloader/IconLoader";

const CP_Leaderboard2 = () => {
    const contentRef = useRef(null);
    const [data, setData] = useState(null);
    const [height, setHeight] = useState(0);
    const [topCoders, setTopCoders] = useState(["", "", "", ""]);
    const [loading, setLoading] = useState(true);

    const [startAnimateTimeLeft, setStartAnimateTimeLeft] = useState(delayForLeaderBoardsPage * 1000);
    useEffect(() => {
        const getTopCoders = async () => {
            const topCoderArr = await calculateTopCoders(data);
            if (topCoderArr.length > 0) {
                setTopCoders(topCoderArr);
                setLoading(false);
            }
        };
        getTopCoders();
    }, [data]);

    useEffect(() => {
        const interval = setInterval(() => {
            setStartAnimateTimeLeft((time) => {
                if (time <= 0) {
                    clearInterval(interval);
                    return 0;
                }
                return time - 1000;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setHeight(contentRef.current.offsetHeight);
    }, []);
    const scaling = height / 540 <= 1 ? height / 540 : 1;
    console.log("time", startAnimateTimeLeft);
    return (
        <div className="cp-leaderboard-page page">
            <div className="bg">
                <img src="/assets/bg/home_bg.png" alt="" />
            </div>

            <PageHeading text="CP LEADERBOARD" />

            <div ref={contentRef} className="content-container inner-content">
                <div className="top-coders-scaler">
                    <div className="top-coders" style={{ transform: `scale(${scaling})` }}>
                        {/* {loading && <h1>Loading our Top Coders</h1>} */}
                        {topCoders.map((coder, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.2 }}
                            >
                                <Codercard coderData={coder} key={i} />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {innerWidth <= 900 && (
                    <div style={{ 
                        display: "flex", 
                        flexWrap: "wrap", 
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1rem",
                        }}>
                        {topCoders.map((coder, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.2 }}
                            >
                                <Codercard coderData={coder} key={i} />
                            </motion.div>
                        ))}
                    </div>
                )}
                <LeaderboardMUI delayT={topCoders.length} setData={setData} parentHeight={height} />
            </div>
        </div>
    );
};

export default CP_Leaderboard2;
