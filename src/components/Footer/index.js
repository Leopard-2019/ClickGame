import React from "react";
import "./style.css";

const Footer = props => (
  <div>
    <nav className="navbar1">
      <ul>
        <li>
          <p>
            <small><img alt="react" src="../react.jpeg" style={{width:"25px",height:"25px"}}></img>
              <strong>
                Copyright {props.currentYear}, Miguel Galarraga
              </strong>
            </small>
          </p>
        </li>
      </ul>
    </nav>
  </div>
);

export default Footer;
