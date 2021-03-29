import { React, useState } from "react";
import "./search-bar.style.css";
import SearchIcon from "../../assests/search.png";
import { filterSong } from "../../redux/songs/song-action";
import {connect} from 'react-redux'

const SearchBar = ({filterSong }) => {
  const [searchData, setData] = useState({
    data: " ",
  });

  const handleChange = (e) => {
    setData({ ...searchData, data: e.target.value });
    
    filterSong(e.target.value)
  };


  return (
    <div className="SearchBar">
      <div className="Search-Icon">
        <img src={SearchIcon} width='21px'alt='search' />
      </div>

      <input defaultValue='dytr'
        type="text" 
        value={searchData.data}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  filterSong: (text) => dispatch(filterSong(text)),
});
export default connect(null,mapDispatchToProps)(SearchBar);
