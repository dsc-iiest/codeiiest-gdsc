import React from "react";
import "./App.css";
import Leaderboard from "./components/leaderboard/leaderboard";
import NameCard from "./components/namecard/namecard";

function App() {
    return (
        <div className="for-tests">
            <Leaderboard />
            <NameCard />
        </div>
    );
}

export default App;
