import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-top">
        <p>{props.location}</p>
        <p>{props.time}</p>
      </div>

      <div className="card-face">
        <img className="face" src={props.face} alt="faces"></img>
      </div>

      <div className="card-btm">
        <p className="temp">{props.temp}</p>
      </div>
    </div>
  );
};
export default Card;
