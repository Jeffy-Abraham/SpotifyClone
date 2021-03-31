import "./home.page.style.css";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import SongCard from "../../components/song-list-card/song-card.component";
import Scramble from '../../components/scramble-animation-component/scramble.component'
const HomePage = ({ playList }) => {
  console.log(playList);
  return (
    <div className="home-background">
      <div className="welcome-message-container">
        <h1 className="welcome-message"><Scramble InitialText='Good Morning' RandomText='Good Morning'style={{fontSize:'27px'}}/> </h1>
        <div style={{ marginTop: "70px" }}>
          {playList.length < 1 ? (
            <h1 className="welcome-message" style={{ fontWeight: "500" }}>
              click on create playlist 😃
            </h1>
          ) : (
            <div>
              {" "}
              <h1 className="welcome-message" style={{marginLeft:'40px'}}>Your Playlists</h1>
              <div style={{display:'flex'}}>
              {playList.map((play) => {
                return (
                 <div  style={{marginLeft:'40px'}}>   
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={`/playlists/${play.PlayList_id}`}
                  >
                    <SongCard name={play.PlayList_name} />
                  </Link>
                  </div>
                );
              })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user: { userName, playList } }) => ({
  userName,
  playList,
});

export default connect(mapStateToProps, null)(HomePage);
