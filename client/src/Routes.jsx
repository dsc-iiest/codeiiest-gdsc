import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./screens/Home/Home";
import Chapterpage from "./screens/Chapterpage/Chapterpage";
// import CP_Leaderboard2 from "./screens/CP_Leaderboard/CP_Leaderboard2";
import Chapters from "./screens/Chapters/Chapters";
// import About from "./screens/AboutUs/about";
// import Coder from "./components/Codercard/coder";
import Events from "./screens/Events/Events";
import ComingSoon from "./screens/comingsoon/ComingSoon";

const AllRoutes = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <Routes>
            <Route exact path="/" element={<Home></Home>}></Route>
            <Route exact path="/cp_leaderboard_page" element={<ComingSoon />}></Route>
            <Route exact path="/chapters">
                <Route path=":id" element={<Chapterpage></Chapterpage>}></Route>
                <Route path="" element={<Chapters />}></Route>
            </Route>
            <Route exact path="/events" element={<Events />}></Route>
            <Route exact path="/about" element={<ComingSoon />}></Route>
            <Route exact path="/leaderboard" element={<ComingSoon />}></Route>
        </Routes>
    );
};

export default AllRoutes;
