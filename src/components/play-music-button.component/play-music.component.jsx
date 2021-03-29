import "./play-music.styles.css";

const PlayMusicButton = ({ size }) => {
  return <div className={size==='small'?'small-music-button-wrapper':'music-button-wrapper'}>
      <div className={size==='small'?'small-triangle':'triangle'} ></div>
  </div>;
};
export default PlayMusicButton;
