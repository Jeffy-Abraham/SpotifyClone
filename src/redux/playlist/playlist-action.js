

export const addToPublicPlayList=(data)=>
(
    {
        type: "ADD_TO_PUBLIC_PLAYLIST",
        payload: data,
      }

)

export const getCurrentPlayList=(data)=>
({

    type:"CURRENT_PLAYLIST",
    payload:data

})
export const addSongtoPlaylist=(songData)=>
({
    type:"ADD_SONG_PLAYLIST",
    payload:songData

}
)