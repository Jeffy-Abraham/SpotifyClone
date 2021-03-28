import React from "react";
import "./music-card.style.css";
const Card = ({ type, image }) => {
  return (
    <div className="music-card-container">
      <div className="card-image">
        <img
          src="https://mosaic.scdn.co/300/ab67616d0000b2733bf71fd32eae3560d96486f1ab67616d0000b2734dfbe36486a0e8655b119660ab67616d0000b273e771a39481e5b482af5ffe0cab67616d0000b273f70761499d7d1a2dd6dc5dc1"
          width="100%" height='100%' alt='card'
        />
      </div>
    </div>
  );
};

export default Card;
