import React from "react";
import { connect } from "react-redux";
import Preview from "../song-preview.component.jsx/song-preview.component";
import CustomButton from "../spotify-button.-component/spotify-button.component";
import "./song-list.style.css";
import {addSongtoPlaylist}from '../../redux/playlist/playlist-action'
import { filterChosenSong } from "../../redux/songs/song-action";
const SongList = ({ SongsList,addSongtoPlaylist,filterChosenSong }) => {
  
  return (
    
    <div className='table-container' style={{position:'absolute',width:'80%'}}>
      <table  border='0' className='table-songs' >
      
        {SongsList.map((songs) => {
          {console.log(songs)}
          return (
            
            
            <tr className='table-songs-row' key={songs.songId}>
              <td>
                <Preview {...songs} />
              </td>
              <td>{songs.genre}</td>
              <td style={{fontSize:'12px'}}>
               {songs.year}
              </td>
              <td><div><button  className='spotify-button-invert' onClick={(e)=>{addSongtoPlaylist(songs);filterChosenSong(songs.songId)}}>ADD</button></div></td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
const mapStateToProps = ({ songs: {filteredSongData} }) => ({
  SongsList: filteredSongData,
});
const mapDispatchToProps = (dispatch) => ({
  addSongtoPlaylist: (songData) => dispatch(addSongtoPlaylist(songData)),
  filterChosenSong:(id)=>dispatch(filterChosenSong(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(SongList);
