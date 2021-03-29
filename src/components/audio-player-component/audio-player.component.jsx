import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import './audio-player.style.component.css'


const AudioPlayers = ({music}) => {
  return (
    
    <AudioPlayer style={{backgroundColor:'#181818',width:'500px'}}
      autoPlay layout='reverse'

      src={music}
      onPlay={(e) => console.log("onPlay")}
      // other props here
    />
   
  );
};

export default AudioPlayers;
