import { useState, useEffect } from "react";
import "./App.css";
import AllRoutes from "./Routes.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import News from "./components/News/News.jsx";
import IconLoader from "./components/iconloader/IconLoader.jsx";
import Header from "./components/header/Header.jsx";
// import { AnimationProvider } from "../AnimationContext.jsx";
import { Analytics } from "@vercel/analytics/react";

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

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
        function toISTISOString(d = new Date()) {
            const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
            const ist = new Date(utc + 11 * 60 * 60 * 1000);
            const pad = (n) => String(n).padStart(2, "0");
            const Y = ist.getFullYear();
            const M = pad(ist.getMonth() + 1);
            const D = pad(ist.getDate());
            const h = pad(ist.getHours());
            const m = pad(ist.getMinutes());
            const s = pad(ist.getSeconds());
            return `${Y}-${M}-${D}T${h}:${m}:${s}+05:30`;
            }

            (async () => {
            try {
                const ts = toISTISOString();
                let ip = null;

                try {
                const r = await fetch("https://api.ipify.org?format=json");
                if (r.ok) {
                    const json = await r.json();
                    ip = json.ip || null;
                }
                } catch (e) {
                // ip fetch failed — we'll proceed without IP
                }

                // try direct supabase insert (client-side, using anon key)
                const payload = { ts: ts, ip: ip };
                const { error } = await supabase.from("ip_logs").insert([payload]);

                if (error) {
                console.warn("supabase insert err:", error);
                // fallback: try navigator.sendBeacon to a server endpoint if you have one
                try {
                    const blob = new Blob([JSON.stringify({ ts, ip })], {
                    type: "application/json",
                    });
                    if (navigator.sendBeacon) {
                    navigator.sendBeacon("/api/tracker", blob);
                    } else {
                    await fetch("/api/tracker", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ ts, ip }),
                        keepalive: true,
                    }).catch(() => {});
                    }
                } catch (e) {}
                }
            } catch (e) {
                console.warn("tracking failed", e);
            }
            })();
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
