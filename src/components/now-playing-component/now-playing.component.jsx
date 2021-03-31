import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Pause from '../../assests/pause.png'

const NowPlaying = ({ play, pause }) => {
  return (
    <div>
      {play ? (
        <Loader color="#1DB954" height={23} width={23} />
      ) : (
        <img src={Pause} height='23px' width='23px' alt='s'/>
      )}
    </div>
  );
};
export default NowPlaying;
