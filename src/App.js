import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavPanel from "./components/nav-panel-component/navpanel.component";
import Playlist from "./pages/playlist-page/playlist.page";
import CreatePlaylist from "./pages/create-playlist/createPlaylist.page";
import { connect } from "react-redux";
import MusicFooter from "./components/music-footer-component/music-footer.component";

function App({ currentlyPlayingSong }) {
  return (
    <div className="App">
      <div className="flex-main-container">
        <div>
          <NavPanel />
        </div>
        <div style={{ width: "80%", marginLeft: "200px" }}>
          <Switch>
            <Route exact path="/" />
            <Route exact path="/Search" />
            <Route exact path="/Library" />
            <Route exact path="/CreatePlaylist" component={CreatePlaylist} />
            <Route exact path="/LikedSongs" />
            <Route exact path="/playlists/:plalistsId" component={Playlist} />
          </Switch>
        </div>
      </div>
      <MusicFooter songToPlay={currentlyPlayingSong} />
    </div>
  );
}
const mapStateToProps = ({ user: { currentlyPlayingSong } }) => ({
  currentlyPlayingSong,
});

export default connect(mapStateToProps, null)(App);
