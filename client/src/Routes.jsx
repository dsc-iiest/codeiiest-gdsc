import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./screens/Home/Home";
import Chapters from "./screens/Chapters/Chapters";
import Chapterpage from "./screens/Chapterpage/Chapterpage";
import About from "./screens/AboutUs/about";
import {NameCard} from "./components/namecard/namecard"
import Leaderboard from "./screens/Leaderboard/Leaderboard";

// import Leaderboard from "./components/leaderboard/leaderboard";
// import CP_Leaderboard2 from "./screens/CP_Leaderboard/CP_Leaderboard2";

const AllRoutes = () => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<Routes>
			<Route
				exact
				path="/"
				element={<Home />}
			>
			</Route>
			<Route
				exact
				path="/team"
				element={<About />}
			>
			</Route>
			<Route
				exact
				path="/chapters"
				element={<Chapters />}
			>
			</Route>
			<Route
				exact
				path="/chapters/:id"
				element={<Chapterpage />}
			>
			</Route>
			<Route
				exact
				path="/leaderboard"
				element={<Leaderboard />}
			>
			</Route>
		</Routes>
	);
};

export default AllRoutes;
