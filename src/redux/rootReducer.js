import {combineReducers} from 'redux'
import SongReducer from './songs/song-reducer'
import userReducer from './user/user-reducer'
import playListReducer from './playlist/playlist-reducer'






const rootReducer=combineReducers({

  songs:SongReducer,
  user:userReducer,
  playList:playListReducer

    
})

export default rootReducer