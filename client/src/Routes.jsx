import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./screens/Home/Home";
import Chapterpage from "./screens/Chapterpage/Chapterpage";
import CP_Leaderboard2 from "./screens/CP_Leaderboard/CP_Leaderboard2";
import Chapters from "./screens/Chapters/Chapters";
import About from "./screens/AboutUs/about";

const AllRoutes = () => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<Routes>
			<Route exact path="/" element={<Home></Home>}></Route>
			<Route
				exact
				path="/cp_leaderboard_page"
				element={<CP_Leaderboard2 />}
			></Route>
			<Route exact path="/chapters">
				<Route path=":id" element={<Chapterpage></Chapterpage>}></Route>
				<Route path="" element={<Chapters></Chapters>}></Route>
			</Route>
			<Route exact path="/team" element={<About></About>}></Route>
			<Route exact path="/leaderboard" element={<CP_Leaderboard2></CP_Leaderboard2>}></Route>
		</Routes>
	);
};

export default AllRoutes;
