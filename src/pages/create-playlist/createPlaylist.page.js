import { React, useState } from "react";
import "./createPlaylist.style.css";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import {getMonth} from '../../data'
import { addPlaylistToUser } from "../../redux/user/user-action";
import CustomButton from "../../components/spotify-button.-component/spotify-button.component";
import { useHistory } from "react-router-dom";
import {addToPublicPlayList} from '../../redux/playlist/playlist-action'
const CreatePlaylist = ({ userName, userId, addPlaylistToUser,addToPublicPlayList }) => {
    let history = useHistory();
  const [playlist, setName] = useState({
    playlistName: "",
  });

  const handleChange = (e) => {
    setName({ [e.target.name]: e.target.value });
  };
 
  const handleSubmit = (e) => {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var data = {
      PlayList_id: uuidv4(),
      PlayList_created_by: userName,
      PlayList_date: day + " " + getMonth(month) + " " + year,
      Songs:[]
    };

    if (e.target.id === "skip") {
      data["PlayList_name"] = "Playlist #" + Math.floor(Math.random() * 10);
      addPlaylistToUser(data);
      addToPublicPlayList(data)
      history.push(`/playlists/${data.PlayList_id}`)
    } else {
      if (playlist.playlistName.length > 0) {
        data["PlayList_name"] = playlist.playlistName;
        addPlaylistToUser(data);
        addToPublicPlayList(data)
        history.push(`/playlists/${data.PlayList_id}`)

      } else {
        alert("Please enter a playlist name or click skip");
      }
    }
  };

  return (
    <div className="create-playlist-container">
      
      <div style={{ marginLeft: "-35px" }}>
        <label
         
          style={{
            display: "block",
            padding: "20px",
            color: "white",
            fontFamily: "Montserrat",
            fontSize: "26px",
          }}
        >
          Enter your playlist name
        </label>
        <input
          autoComplete="off"
          value={playlist.playlistName}
          type="text"
          name="playlistName"
          id="playlist"
          onChange={handleChange}
        />
      </div>
      <div className="create-playlist-container-buttons">
        <div>
          <CustomButton
            text="SKIP"
            type="invert"
            handleSubmits={handleSubmit}
            id="skip"
          />
        </div>

        <div>
          <CustomButton
            text="CREATE"
            handleSubmits={handleSubmit}
            id="create"
          />
        </div>
      </div>
      <small style={{ color: "white", fontWeight: "500", marginLeft: "-30px" }}>
        Music for everyone
      </small>
    </div>
  );
};
const mapStateToProps = ({
  user: { userName, playList, userId, isFetching },
}) => ({
  userName,
  userId,
  playList,
  isFetching,
});
const mapDispatchToProps = (dispatch) => ({
  addPlaylistToUser: (data) => dispatch(addPlaylistToUser(data)),
  addToPublicPlayList:(data)=>dispatch(addToPublicPlayList(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(CreatePlaylist);
