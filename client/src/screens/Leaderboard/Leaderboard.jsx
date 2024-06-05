import { React } from "react";
import "./Leaderboard.css";
import PageHeading from "../../components/PageHeading/PageHeading";
import Table from "../../components/leaderboard/leaderboard";

const Leaderboard = () => {
    return (
        <div className="leaderboard-wrapper page">
            <PageHeading text={"LEADERBOARD"} />
            <div className="content-area">
                <Table />
                <Table />
            </div>
        </div>
    );
};

export default Leaderboard;
