import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="con">
        {/* <h3>This is nav bar</h3> */}
        <nav>
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
        </nav>
      </nav>
    </>
  );
};

export default Nav;
