export const addPlaylistToUser = (data) => ({
    type: "ADD_PLAYLIST",
    payload: data,
  });

  export const playtheDamnSong=(currentSong)=>
  ({
        type:"PLAY_SONG",
        payload:currentSong



  }) 
  export const juststopTheSong=()=>
  ({
        type:"PAUSE_SONG",
        

  })
  export const resumeTheSong=()=>
  ({
    type:"RESUME_SONG"
  })