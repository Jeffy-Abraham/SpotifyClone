const INITIAL_STATE = {
  isFetching: false,
  userName: "Jeffy Abraham",
  userId:1234,
  playList: [
   
  ],
  currentlyPlayingSong:false
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  
    case  "ADD_PLAYLIST":
        return{
            ...state,playList:[...state.playList,action.payload]


        }
    case "PLAY_SONG":
      return{
        ...state,currentlyPlayingSong:action.payload
      }
     

    default:
      return state;
  }
};

export default userReducer;
