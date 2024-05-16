import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import Chapterpage from "./screens/Chapterpage/Chapterpage";
import Chapters from "./screens/Chapters/Chapters";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Chapters />} />
          <Route path="/chapters/:id" element={<Chapterpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
