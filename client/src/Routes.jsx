import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./screens/Home/Home";
import About from "./screens/AboutUs/about";
import { NameCard } from "./components/namecard/namecard"
import CP_Leaderboard2 from "./screens/CP_Leaderboard/CP_Leaderboard2";
import LeaderboardPage from './screens/CP_Leaderboard/LeaderboardPage';

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
				element={<NameCard />}
			>
			</Route>
			<Route
				exact
				path='/cp_leaderboard'
				element={<CP_Leaderboard2></CP_Leaderboard2>}
			>
			</Route>
			<Route
				exact
				path='cp_leaderboard/leaderboard'
				element={<LeaderboardPage></LeaderboardPage>}
			>
			</Route>
			<Route
				exact
				path="/team"
				element={<About />}
			>
			</Route>
		</Routes>
	);
};

export default AllRoutes;
