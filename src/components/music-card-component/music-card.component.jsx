import React from "react";
import "./music-card.style.css";
import {cover} from './coverImage'

const Card = ({ type, image }) => {
  return (
    <div className="music-card-container">
      <div className="card-image">
        <img
          src={cover[Math.floor(Math.random()*5)]}
          width="100%"
          height="100%"
          alt="card"
        />
      </div>
    </div>
  );
};

export default Card;
