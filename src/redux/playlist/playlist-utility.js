export const getPlayListDetail=(id,playlists)=>

{
    var arr=(playlists.filter(playlist=>
        {
            return playlist.PlayList_id===id
        }))
    

        return arr[0]

}