import React from "react";
import "./style.css";

const NavBar = props => (
  <div>
    <nav className="navbar">
      <ul>
        <li>
          <a href="/">
            <span style={{ color: "black" }}>
              <strong>Click SuperHero Game</strong>
            </span>
          </a>
        </li>
        <li style={{ padding: "0px 0px 0px 500px" }}>
          <p>
            <strong>Score: {props.score}</strong>
          </p>
        </li>
        <li style={{ padding: "0px 0px 0px 200px" }}>
          <p>
            <strong>Top Score: {props.topScore}</strong>
          </p>
        </li>
      </ul>
    </nav>
  </div>
);

export default NavBar;
