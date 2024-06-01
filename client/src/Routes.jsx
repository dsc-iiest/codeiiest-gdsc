import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./screens/Home/Home";
import About from "./screens/AboutUs/about";
import {NameCard} from "./components/namecard/namecard"

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
				path="/team"
				element={<About />}
			>
			</Route>
		</Routes>
	);
};

export default AllRoutes;
