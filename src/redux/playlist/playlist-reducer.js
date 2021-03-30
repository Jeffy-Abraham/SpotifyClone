import { getPlayListDetail, pushSongtoarray } from "./playlist-utility";

const INITIAL_STATE = {
  playLists: [],
  currentPlayList: {

  },
};
const playListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_PUBLIC_PLAYLIST":
      return {
        ...state,
        playLists: [...state.playLists, action.payload],
      };

    case "CURRENT_PLAYLIST":
      return {
        ...state,
        currentPlayList: getPlayListDetail(action.payload, state.playLists),
      };

    case "ADD_SONG_PLAYLIST":
      //push song to song array inside the currentPlaylist

      return {
        ...state,
        currentPlayList: pushSongtoarray(state.currentPlayList, action.payload),
      };
    
    default:
      return state;
  }
};

export default playListReducer;
