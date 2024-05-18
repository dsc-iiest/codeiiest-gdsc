import { useState } from "react";
import "./App.css";
import AllRoutes from "./Routes.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News.jsx";

const App = () => {
	return (
		<div className="app">
			<Router>
				<div className="bg">
					<img src="/assets/bg/home_bg.png" alt="" />
					{/* <video autoPlay>
						<source src="/assets/bg/home_bg.mp4" type="video/mp4"></source>
					</video> */}
				</div>

				<Navbar></Navbar>
				<div className="frame">
					<img src="/assets/frame.png" alt="" />
				</div>
				<AllRoutes></AllRoutes>
			</Router>
		</div>
	);
};

export default App;
