import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./screens/Home/Home";
import Chapterpage from "./screens/Chapterpage/Chapterpage";
import Chapters from "./screens/Chapters/Chapters";

const AllRoutes = () => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<Routes>
			<Route exact path="/" element={<Home></Home>}></Route>
			<Route exact path="/chapters">
				<Route path=":id" element={<Chapterpage></Chapterpage>}></Route>
				<Route path="" element={<Chapters></Chapters>}></Route>
			</Route>
		</Routes>
	);
};

export default AllRoutes;
