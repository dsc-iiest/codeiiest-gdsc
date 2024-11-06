import { useState, useEffect } from "react";
import "./App.css";
import AllRoutes from "./Routes.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import News from "./components/News/News.jsx";
import IconLoader from "./components/iconloader/IconLoader.jsx";
import Header from "./components/header/Header.jsx";
// import { AnimationProvider } from "../AnimationContext.jsx";
import { Analytics } from "@vercel/analytics/react"

const App = () => {
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        if (Loading) {
            setTimeout(() => {
                console.log("hello");
                console.log(Loading);
                setLoading(false);
            }, 4000);
        }
    }, []);
    return (
        <div className="app">
            <Analytics />
            <Router>
                <IconLoader />
                <div className={"animate" + (Loading?" paused-animation":" run-animation")}>
                    <Navbar></Navbar>
                    <Header />
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
                </div>
            </Router>
        </div>
    );
};

export default App;
