import React from "react";
import { connect } from "react-redux";
import Preview from "../song-preview.component.jsx/song-preview.component";
import CustomButton from "../spotify-button.-component/spotify-button.component";
import "./song-list.style.css";
const SongList = ({ SongsList }) => {
  return (
    <div>
      <table border='0' className='table-songs'>
        {SongsList.map((songs) => {
          return (
            
            <tr className='table-songs-row' key={songs.songId}>
              <td>
                <Preview {...songs} />
              </td>
              <td>{songs.genre}</td>
              <td style={{fontSize:'12px'}}>
               {songs.year}
              </td>
              <td><CustomButton text='ADD' type='inverse'/></td>
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

export default connect(mapStateToProps, null)(SongList);
