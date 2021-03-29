export const addPlaylistToUser = (data) => ({
    type: "ADD_PLAYLIST",
    payload: data,
  });

  export const playtheDamnSong=(currentSong)=>
  ({
        type:"PLAY_SONG",
        payload:currentSong



  }) 