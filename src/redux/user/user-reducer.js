import setStatus from "./user-utility";

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
        ...state,currentlyPlayingSong:setStatus(action.payload)
      }
    case "PAUSE_SONG":
      var temp=state.currentlyPlayingSong
     
      temp['isPlaying']=false
      return{
        ...state,currentlyPlayingSong:temp

      }
    case   "RESUME_SONG":
      var temp=state.currentlyPlayingSong
     
      temp['isPlaying']=true
      return{
        ...state,currentlyPlayingSong:temp

      }

     

    default:
      return state;
  }
};

export default userReducer;
