import React from "react";
import "./song-preview.style.css";
const Preview = ({ songName, songId, artist, genre, image }) => {
  return (
    <div className="song-container">
      <td> 
      <div className="song-flex-container">
        <div>
          <img src={image} width="43px" style={{borderRadius:'2px'}}alt='album' />
        </div>
          
        <div className='song-desc-container'>
          <div className="song-Title">{songName}</div>
          <div className="song-Artist">{artist}</div>
        </div>
      </div>
      </td> 
      <td> 
      </td> 
    </div>
  );
};

export default Preview;
