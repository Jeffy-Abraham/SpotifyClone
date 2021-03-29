import AudioPlayers from "../audio-player-component/audio-player.component";
import Preview from "../song-preview.component.jsx/song-preview.component";
import "./music-footer.component.style.css";
const MusicFooter = ({songToPlay}) => {
   const {musicLink}=songToPlay
  return (

    <div className="audio-container">
      <div className="audio-flex">
        <Preview {...songToPlay} type='large'/>
        <AudioPlayers music={musicLink}/>
        <div></div>
      </div>
    </div>
  );
};
export default MusicFooter;
