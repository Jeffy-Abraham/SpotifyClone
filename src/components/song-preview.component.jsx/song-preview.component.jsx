import React from "react";
import "./song-preview.style.css";
const Preview = ({
  songName,
  songId,
  artist,
  genre,
  image,
  type,
  activeid,
}) => {
  return (
    <div className="song-container">
      <td>
        <div className="song-flex-container">
          <div>
            <img
              src={image}
              width={type === "large" ? "58px" : "44px"}
              style={{ borderRadius: "2px" }}
              alt="album"
            />
          </div>

          <div
            className={
              (activeid === songId ? "highlight-" : "") + "song-desc-container"
            }
          >
            <div className={(type === "large" ? "large-" : "") + "song-Title"}>
              {songName}
            </div>
            <div className="song-Artist">{artist}</div>
          </div>
        </div>
      </td>
      <td></td>
    </div>
  );
};

export default Preview;
