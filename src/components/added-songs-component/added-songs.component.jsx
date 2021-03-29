import React from "react";
import { connect } from "react-redux";
import Preview from "../song-preview.component.jsx/song-preview.component";
import "./added-songs.style.css";
import Clock from "../../assests/clock.png";
import Like from "../like-component/like.component";
const PlayListSongs = ({ Songs }) => {
  return (
    <div>
        {Songs.length!==0?<table
        border="0"
        className="table-songs"
        style={{ height: "90px", overflowY: "scroll", width: "100%" }}
      >
        <tr style={{ height: "80px" }} className="song-heading-style">
          <td>#</td>
          <td>TITLE</td>
          <td> LIKE</td>
          <td>GENERE</td>
          <td>DATE ADDED</td>
          <td>
            <img src={Clock} width="22px" />
          </td>
        </tr>
        {Songs.map((songs, index) => {
          return (
            <tr key={songs.songId}>
              <td
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600px",
                }}
              >
                {index + 1}
              </td>
              <td>
                <Preview {...songs} />
              </td>
              <td><Like LikeStatus={songs.Like}/></td>
              <td>{songs.genre}</td>
              <td>{songs.DateAdded}</td>
              <td>{songs.lengths}</td>
            </tr>
          );
        })}
      </table>:<div></div>}
      
    </div>
  );
};

const mapStateToProps = ({
  playList: {
    currentPlayList: { Songs },
  },
}) => ({
  Songs,
});

export default connect(mapStateToProps, null)(PlayListSongs);
