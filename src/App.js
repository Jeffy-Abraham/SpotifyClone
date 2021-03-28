import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavPanel from "./components/nav-panel-component/navpanel.component";
import Playlist from "./pages/playlist-page/playlist.page";
import CreatePlaylist from "./pages/create-playlist/createPlaylist.page";

function App() {
  return (
    <div className="App">
      <div>
        <NavPanel />
      </div>
      <div style={{ width:'80%',marginLeft:'200px' }} >
        <Switch>
          <Route exact path="/" />
          <Route exact path="/Search" />
          <Route exact path="/Library" />
          <Route exact path="/CreatePlaylist" component={CreatePlaylist} />
          <Route exact path="/LikedSongs" />
          <Route exact path="/playlists/:plalistsId" component={Playlist}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
