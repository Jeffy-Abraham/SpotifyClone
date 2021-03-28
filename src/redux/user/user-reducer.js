const INITIAL_STATE = {
  isFetching: false,
  userName: "Jeffy Abraham",
  userId:1234,
  playList: [
   
  ],
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  
    case  "ADD_PLAYLIST":
        return{
            ...state,playList:[...state.playList,action.payload]

        }

    default:
      return state;
  }
};

export default userReducer;
