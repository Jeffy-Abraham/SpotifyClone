import React from "react";
import Card from "../../components/music-card-component/music-card.component";
import SearchBar from "../../components/search-bar-component/search-bar-component";
import SongList from "../../components/song-list-component/song-list.component";
import "./playList.page.css";
import { connect } from "react-redux";
import { getCurrentPlayList } from "../../redux/playlist/playlist-action";
import PlayMusicButton from "../../components/play-music-button.component/play-music.component";
import PlayListSongs from "../../components/added-songs-component/added-songs.component";
import addedSongsComponent from "../../components/added-songs-component/added-songs.component";

class Playlist extends React.Component {
  componentDidMount() {}

  render() {
    const { currentPlayList } = this.props;
    const { getCurrentPlayList, match } = this.props;
    const { plalistsId } = match.params;
    getCurrentPlayList(plalistsId);

    const { PlayList_created_by, PlayList_name } = currentPlayList;

    return (
      <div className="display-flex-playlist-container">
        <div className="display-flex-wrap">
          <div className="display-flex-playlist">
            <Card />

            <div className="playlist-title-container">
              <h1 className="playlist-title">{PlayList_name}</h1>
              <small
                style={{
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "500",
                  letterSpacing: "0.07rem",
                }}
              >
                {PlayList_created_by}
                <div></div>
              </small>
            </div>

            {/*here goes the music component*/}
          </div>

          {/*no songs then don't display the button*/}

          <hr style={{ width: "90%", margin: "auto" }}></hr>
        </div>
        <div className="play-song-list">
          <PlayListSongs />
          <div className="search-song">
            <h2 style={{ color: "white" }}>
              Let's find something for your playlist
            </h2>
            <SearchBar />
            <SongList />
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  getCurrentPlayList: (data) => dispatch(getCurrentPlayList(data)),
});

const mapStateToProps = ({ playList: { currentPlayList } }) => ({
  currentPlayList,
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
