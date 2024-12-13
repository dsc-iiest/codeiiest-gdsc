import React, { useEffect, useRef, useState } from "react";
import Codercard from "../../components/Codercard/Codercard";
import "./CP_LeaderboardPage.css";
import PageHeading from "../../components/PageHeading/PageHeading";
import LeaderboardMUI from "../../components/leaderboard/LeaderboardMUI";
import { motion } from "framer-motion";
import { delayForLeaderBoardsPage } from "../../components/iconloader/IconLoader";
import { calculateTopCoders } from "./calculateTopCoders";


const CP_Leaderboard2 = () => {
  const contentRef = useRef(null);
  const [data, setData] = useState(null)
  const [height, setHeight] = useState(0);
  const [topCoders, setTopCoders] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getTopCoders = async () => {
      const topCoderArr = await calculateTopCoders(data);
      if (topCoderArr.length > 0) {
        setTopCoders(topCoderArr)
        setLoading(false)
      }

    }
    getTopCoders()
  }, [data])

  useEffect(() => {
    setHeight(contentRef.current.offsetHeight);
  }, []);
  const scaling = height / 540 <= 1 ? height / 540 : 1;

  return (
    <div className="cp-leaderboard-page page">
      <div className="bg">
        <img src="/assets/bg/home_bg.png" alt="" />
      </div>

      <PageHeading text="CP LEADERBOARD" />

      <div ref={contentRef} className="content-container inner-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 1, delay: delayForLeaderBoardsPage, type: "spring" }}
        >
          <div className="top-coders-scaler">
            <div

              className="top-coders"
              style={{ transform: `scale(${scaling})` }}
            >
              {loading && <h1>Loading our Top Coders</h1>}
              {topCoders && topCoders.map((coder, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: delayForLeaderBoardsPage + i * 0.2 }}
                >
                  <Codercard coderData={coder} key={i} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delayForLeaderBoardsPage + topCoders.length * 0.2, duration: 0.5 }}
        >
          <LeaderboardMUI setData={setData} parentHeight={height} />
        </motion.div>
      </div>
    </div>
  );
};

export default CP_Leaderboard2;