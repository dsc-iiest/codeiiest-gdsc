import { useState } from "react";
import "./App.css";
import AllRoutes from "./Routes.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News.jsx";
import IconLoader from "./components/iconloader/IconLoader.jsx"

const App = () => {
	return (
		<div className="app">
			<Router>
				
				{/* <IconLoader /> */}
				<Navbar></Navbar>
				<div className="frame">
					<img src="/assets/frame.png" alt="" />
				</div>
				{/* <div className="page">
					<div className="outer-content">
						<div className="inner-content">
							
						</div>
					</div>
				</div> */}
				<AllRoutes></AllRoutes>
			</Router>
		</div>
	);
};

export default App;
