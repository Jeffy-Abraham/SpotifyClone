import Preview from "../song-preview.component.jsx/song-preview.component";
import Like from "../like-component/like.component";
import PlayMusicButton from "../play-music-button.component/play-music.component";
const AudioPlayer = () => {
  return (
    <div className="audio-player-container">
       
        <h1 style={{color:'wheat'}}>AUDIO</h1>
        <Like LikeStatus={true}/>
        <PlayMusicButton size='small'/>
    </div>
  );
};

export default AudioPlayer;
