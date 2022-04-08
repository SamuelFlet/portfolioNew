/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/App.css";
import Intro from "../components/Intro";
import Divider from "../components/Divider";
import Projects from "../components/Projects";

export default function App() {
  return (
    <div className="bg-slate-800">
      <Intro />
      <Divider />
      <Projects />
    </div>
  );
}
