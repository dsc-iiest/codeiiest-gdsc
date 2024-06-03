import React from "react";
import "./leaderboard.css";

var rowsInfo = [
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: 1 },
    {
        name: "Nafis AdnanAdnan Mondal",
        year: "3rd",
        rating: 1234,
        contests: 100,
        maxdelta: 100,
        bestRank: 3223,
        deltasign: -1,
    },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: 0 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
    { name: "Rishab Dugar", year: "3rd", rating: 1234, contests: 100, maxdelta: 100, bestRank: 3223, deltasign: -1 },
];

function DeltaMove({ sign }) {
    return sign < 0 ? (
        <img src={"/assets/negative.png"} />
    ) : sign > 0 ? (
        <img src={"/assets/positive.png"} />
    ) : (
        <img src={"/assets/zero.png"} />
    );
}

function Header() {
    return (
        <div className="lb-rows">
            <div className="lb-header">Rank</div>
            <div className="lb-header">Name</div>
            <div className="lb-header">Year</div>
            <div className="lb-header">Highest Rating</div>
            <div className="lb-header">Contests Given</div>
            <div className="lb-header">Maximum Delta</div>
            <div className="lb-header">Best Rank</div>
            <div className="lb-header"></div>
        </div>
    );
}

function ProfilePic({ path }) {
    return (
        <div className="profile-pic">
            <img className="profile-pic-pic" src={`/assets/profilepic/${path}.png`} alt={path} />
        </div>
    );
}

function Rows() {
    return rowsInfo.map((row, i) => (
        <div className="lb-rows" key={i}>
            <div className="lb-rowdata-bold">{i + 1}</div>
            <div className="lb-rowdata-bold lb-left">
                <ProfilePic path={"profilepic"} />
                <span>{row.name}</span>
            </div>
            <div className="lb-rowdata-light">{row.year}</div>
            <div className="lb-rowdata-bold">{row.rating}</div>
            <div className="lb-rowdata-bold">{row.contests}</div>
            <div className="lb-rowdata-bold">{row.maxdelta}</div>
            <div className="lb-rowdata-bold">{row.bestRank}</div>
            <div className="lb-rowdata-bold"><DeltaMove sign={row.deltasign} /></div>
        </div>
    ));
}

const Leaderboard = () => {
    return (
        <div className="leaderboard">
            <Header />
            <div className="row-data">
                <Rows />
            </div>
        </div>
    );
};

export default Leaderboard;
