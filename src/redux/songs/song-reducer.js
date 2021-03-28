import {filterbyName} from './song-utility'
import songData from './data'
const INITIAL_STATE = {
  isFetching:false,  
  songsData: songData,
  filteredSongData:songData
};
const songReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FILTER_SONGS":
      return { ...state, filteredSongData:filterbyName(action.payload,state.songsData) };

    

    default:
      return state;
  }
};

export default songReducer;
