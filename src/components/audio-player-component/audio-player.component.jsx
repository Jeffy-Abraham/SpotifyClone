import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { juststopTheSong, resumeTheSong } from "../../redux/user/user-action";
import {connect} from 'react-redux'
import './audio-player.style.component.css'


const AudioPlayers = ({music,juststopTheSong,resumeTheSong}) => {
  return (
    
    <AudioPlayer style={{backgroundColor:'#181818',width:'500px'}}
      autoPlay layout='reverse'

      src={music}
      onPlay={(e) => resumeTheSong()}
      
      onPause={(e)=>juststopTheSong()}
       />
   
  );
};

  

  const mapDispatchToProps = (dispatch) => ({
    juststopTheSong: () => dispatch(juststopTheSong()),
    resumeTheSong:()=>dispatch(resumeTheSong())

  });

export default connect(null,mapDispatchToProps)(AudioPlayers);
