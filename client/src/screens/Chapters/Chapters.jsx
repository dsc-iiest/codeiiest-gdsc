import { React, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Chapters.css";

const Chapters = () => {
  // const [bg, setBg] = useState(null);
  // const bgSetter = useRef(null);

  // useEffect(() => {
  //   bgSetter.current = new IntersectionObserver(changeBg, { threshold: 0.1 });
  //   const selector = document.querySelector(".parent-section");
  //   bgSetter.current.observe(selector);

  //   return () => {
  //     bgSetter.current.disconnect();
  //   };
  // }, []);

  // const changeBg = (entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       setBg(entry.target.classList[1]);
  //     }
  //   });
  // };

  return (
    <>
      <img src={"./assets/mainrect.png"} alt="mainrect" className="main-rect" />
      <div className={"bg-image"}></div>
      <div className="root-content">
        <div className="temporary-link">
          <Link to="/chapters/development">DEVELOPMENT</Link>
          <Link to="/chapters/cybersecurity">CYBERSECURITY</Link>
          <Link to="/chapters/aiml">AI and ML</Link>
          <Link to="/chapters/uiux">UI and UX</Link>
          <Link to="/chapters/cpdsa">CP/DSA</Link>
          <Link to="/chapters/media">MEDIA</Link>
          <Link to="/chapters/diversity">DIVERSITY</Link>
        </div>
      </div>
    </>
  );
};

export default Chapters;
