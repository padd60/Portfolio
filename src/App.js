import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Skill from "./components/Skill.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Project from "./components/Project";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
