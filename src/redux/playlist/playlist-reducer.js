import {getPlayListDetail}from './playlist-utility'

const INITIAL_STATE = {
    playLists:[],
    currentPlayList:{}
 
  };
  const playListReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    
      case  "ADD_TO_PUBLIC_PLAYLIST":
          return{
              ...state,playLists:[...state.playLists,action.payload]
  
          }
        
          
      case 'CURRENT_PLAYLIST':
            return{
                ...state,currentPlayList:getPlayListDetail(action.payload,state.playLists)
            }   

    
  
      default:
        return state;
    }
  };
  
  export default playListReducer;
  