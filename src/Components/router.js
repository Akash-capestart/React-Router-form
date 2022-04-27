import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contactus from "../Pages/Contactus";
import { BrowserRouter } from "react-router-dom";
export default function RouterComp() {
  return (
    <div className="nav">
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contactus</Link>
          </li>
        </ul>
      </nav> */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
    </div>
  );
}
