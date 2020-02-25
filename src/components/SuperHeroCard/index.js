import React from "react";
import "./style.css";


const SuperHeroCard = props => (
  <div
    className="card"
    key={props.id}
    data-id={props.id}
    name={props.name}
    style={{ backgroundImage: `url(${props.image})` }}
    onClick={props.StartGame}
  ></div>
);

export default SuperHeroCard;
